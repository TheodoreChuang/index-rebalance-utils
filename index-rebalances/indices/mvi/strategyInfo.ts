import { BigNumber } from "@ethersproject/bignumber";
import { ether } from "@setprotocol/index-coop-contracts/dist/utils/common";

import { ZERO } from "../../../utils/constants";
import { ASSETS } from "../../assetInfo";
import { exchanges, StrategyInfo } from "../../types";

export const strategyInfo: StrategyInfo = {
  MANA: {
    address: ASSETS.MANA.address,
    input: ether(0.15348),
    maxTradeSize: ether(13851),
    exchange: exchanges.SUSHISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  ENJ: {
    address: ASSETS.ENJ.address,
    input: ether(0.15815),
    maxTradeSize: ether(10000),
    exchange: exchanges.UNISWAP_V3,
    exchangeData: "0x000bb8",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  WAXE: {
    address: ASSETS.WAXE.address,
    input: ether(0.09508),
    maxTradeSize: ether(172),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  AXS: {
    address: ASSETS.AXS.address,
    input: ether(0.08071),
    maxTradeSize: ether(1130),
    exchange: exchanges.SUSHISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  SAND: {
    address: ASSETS.SAND.address,
    input: ether(0.112),
    maxTradeSize: ether(131000),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  RFOX: {
    address: ASSETS.RFOX.address,
    input: ether(0.04627),
    maxTradeSize: ether(35000),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  AUDIO: {
    address: ASSETS.AUDIO.address,
    input: ether(0.07995),
    maxTradeSize: ether(12500),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  DG: {
    address: ASSETS.DG.address,
    input: ether(0.03569),
    maxTradeSize: ether(37),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  NFTX: {
    address: ASSETS.NFTX.address,
    input: ether(0.04981),
    maxTradeSize: ether(285),
    exchange: exchanges.SUSHISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  WHALE: {
    address: ASSETS.WHALE.address,
    input: ether(0.04536),
    maxTradeSize: ether(960),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(1800),
    currentUnit: ZERO,
  },
  MEME: {
    address: ASSETS.MEME.address,
    input: ether(0.02138),
    maxTradeSize: ether(8),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  TVK: {
    address: ASSETS.TVK.address,
    input: ether(0.02725),
    maxTradeSize: ether(31000),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  RARI: {
    address: ASSETS.RARI.address,
    input: ether(0.04431),
    maxTradeSize: ether(360),
    exchange: exchanges.SUSHISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  REVV: {
    address: ASSETS.REVV.address,
    input: ether(0.02399),
    maxTradeSize: ether(34000),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
  MUSE: {
    address: ASSETS.MUSE.address,
    input: ether(0.02659),
    maxTradeSize: ether(373),
    exchange: exchanges.UNISWAP,
    exchangeData: "0x00",
    coolOffPeriod: BigNumber.from(900),
    currentUnit: ZERO,
  },
};