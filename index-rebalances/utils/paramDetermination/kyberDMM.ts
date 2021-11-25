import { BigNumber } from "ethers";
import { BaseProvider } from "@ethersproject/providers";

import { ChainId } from "@uniswap/sdk";

import {
  ether,
  preciseDiv,
  preciseMul,
} from "@setprotocol/index-coop-contracts/dist/utils/common";

import {
  Fetcher as kyberFetcher,
  Pair as kyberPair,
  Token as kyberToken,
  TokenAmount as kyberTokenAmount,
  Trade as kyberTrade,
} from "@dynamic-amm/sdk";

import { ZERO } from "../../../utils/constants";
import { ExchangeQuote, exchanges, Address } from "../../types";
import { getETHAddress, getBTCAddress, getUSDCAddress } from "../addresses";

const KYBER_FACTORY = "0x833e4083B7ae46CeA85695c4f7ed25CDAd8886dE";
const KYBER_FACTORY_POLYGON = "0x546C79662E028B661dFB4767664d0273184E4dD1";

function getFactoryAddress(chainId: number) {
  switch (chainId) {
    case 1:
      return KYBER_FACTORY;
    case 137:
      return KYBER_FACTORY_POLYGON;
    default:
      return "";
  }
}

export async function getKyberDMMQuote(
  provider: BaseProvider,
  tokenAddress: Address,
  targetPriceImpact: BigNumber,
  chainId: number = ChainId.MAINNET
): Promise<ExchangeQuote> {
  const ethAddress = getETHAddress(chainId);
  const btcAddress = getBTCAddress(chainId);
  const usdcAddress = getUSDCAddress(chainId);

  const token: kyberToken = await kyberFetcher.fetchTokenData(
    chainId,
    tokenAddress,
    provider
  );
  const weth: kyberToken = await kyberFetcher.fetchTokenData(
    chainId,
    ethAddress,
    provider
  );
  const wbtc: kyberToken = await kyberFetcher.fetchTokenData(
    chainId,
    btcAddress,
    provider
  );
  const usdc: kyberToken = await kyberFetcher.fetchTokenData(
    chainId,
    usdcAddress,
    provider
  );

  const trades = await kyberTrade.bestTradeExactIn(
    await getKyberDMMPairs(provider, [token, weth, wbtc, usdc], chainId),
    new kyberTokenAmount(weth, ether(1).toString()),
    token,
    { maxNumResults: 3, maxHops: 1 }
  );

  if (trades.length != 0) {
    // Use linear approximation of price impact to find out how many 1 ETH trades add to 50 bps price
    // impact (net of fees)
    const fee: BigNumber = BigNumber.from(
      trades[0].route.pairs[0].fee.toString()
    );
    const priceImpactRatio = preciseDiv(
      targetPriceImpact,
      // Price impact measured in percent so fee must be as well
      ether(
        (
          parseFloat(trades[0].priceImpact.toSignificant(18)) -
          fee.toNumber() / 10 ** 16
        ).toFixed(18)
      )
    );

    return {
      exchange: exchanges.KYBER,
      size: preciseMul(
        ether(parseFloat(trades[0].outputAmount.toExact())).div(
          BigNumber.from(10).pow(18 - token.decimals)
        ),
        priceImpactRatio
      ).toString(),
      data: trades[0].route.pairs[0].address,
    } as ExchangeQuote;
  }

  return {
    exchange: exchanges.KYBER,
    size: ZERO.toString(),
    data: "0x",
  } as ExchangeQuote;
}

async function getKyberDMMPairs(
  provider: BaseProvider,
  tokens: kyberToken[],
  chainId: number
): Promise<kyberPair[][]> {
  const factoryAddress = getFactoryAddress(chainId);
  const pairs: kyberPair[][] = [];
  for (let i = 0; i < tokens.length - 1; i++) {
    for (let j = 1; j < tokens.length - i - 1; j++) {
      const tokenOne = tokens[i];
      const tokenTwo = tokens[i + j];

      let assetPairs;
      try {
        assetPairs = await kyberFetcher.fetchPairData(
          tokenOne,
          tokenTwo,
          factoryAddress,
          provider
        );
      } catch (error) {
        continue;
      }
      if (assetPairs.length > 0) {
        pairs.push(assetPairs);
      }
    }
  }

  return pairs;
}
