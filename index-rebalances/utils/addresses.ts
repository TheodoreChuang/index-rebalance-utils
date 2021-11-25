import DEPENDENCY from "../dependencies";

const {
  ETH_ADDRESS,
  BTC_ADDRESS,
  USDC_ADDRESS,
  USDC_ADDRESS_POLYGON,
  WBTC_POLYGON,
  WETH_POLYGON,
} = DEPENDENCY;

export function getETHAddress(chainId: number) {
  switch (chainId) {
    case 1:
      return ETH_ADDRESS;
    case 137:
      return WETH_POLYGON;
    default:
      return "";
  }
}

export function getBTCAddress(chainId: number) {
  switch (chainId) {
    case 1:
      return BTC_ADDRESS;
    case 137:
      return WBTC_POLYGON;
    default:
      return "";
  }
}

export function getUSDCAddress(chainId: number) {
  switch (chainId) {
    case 1:
      return USDC_ADDRESS;
    case 137:
      return USDC_ADDRESS_POLYGON;
    default:
      return "";
  }
}
