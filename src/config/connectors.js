import {
    mainnet as defaultMainnet,
    goerli as defaultGoerli,
} from 'wagmi/chains'
import MetaMaskLogo from "../images/svg/meta-mask.svg"
import CoinbaseLogo from "../images/svg/coinbase.svg"
import WalletConnect from "../images/svg/wallet-connect.svg"

const connectors = [
    {
      title: "Metamask",
      icon: MetaMaskLogo,
      connectorId: "metaMask",
      priority: 1,
      description: "Connect to your MetaMask Wallet",
      href: "",
    },
    // {
    //   title: "Binance Wallet",
    //   icon: BinanceChain,
    //   connectorId: ConnectorNames.BSC,
    //   priority: 2,
    // },
    {
      title: "Coinbase Wallet",
      icon: CoinbaseLogo,
      connectorId: "coinbaseWallet",
      priority: 3,
      description: "Connect to your Coinbase Wallet",
    },
    // {
    //   title: "Trust Wallet",
    //   icon: TrustWallet,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 4,
    //   href: "https://link.trustwallet.com/open_url?coin_id=20000714&url=https://pancakeswap.finance/",
    // },
    {
      title: "WalletConnect",
      icon: WalletConnect,
      connectorId: "walletConnect",
      priority: 5,
      description: "Connect to your WalletConnect Wallet",
    },
    // {
    //   title: "Opera Wallet",
    //   icon: Opera,
    //   connectorId: ConnectorNames.Injected,
    //   priority: () => {
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isOpera) ? 0 : 6;
    //   },
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isOpera),
    //   href: "https://www.opera.com/crypto/next",
    // },
    // {
    //   title: "Brave Wallet",
    //   icon: Brave,
    //   connectorId: ConnectorNames.Injected,
    //   priority: () => {
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isBraveWallet) ? 0 : 6;
    //   },
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isBraveWallet),
    // },
    // {
    //   title: "MathWallet",
    //   icon: MathWallet,
    //   connectorId: ConnectorNames.Injected,
    //   // @ts-ignore
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isMathWallet),
    //   priority: () => {
    //     // @ts-ignore
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isMathWallet) ? 0 : 999;
    //   },
    // },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    //   priority: () => {
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isTokenPocket) ? 0 : 999;
    //   },
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isTokenPocket),
    // },
    // {
    //   title: "SafePal",
    //   icon: SafePal,
    //   connectorId: ConnectorNames.Injected,
    //   // @ts-ignore
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isSafePal),
    //   priority: () => {
    //     // @ts-ignore
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isSafePal) ? 0 : 999;
    //   },
    // },
    // {
    //   title: "Coin98",
    //   icon: Coin98,
    //   connectorId: ConnectorNames.Injected,
    //   // @ts-ignore
    //   installed: typeof window !== "undefined" && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)),
    //   priority: () => {
    //     // @ts-ignore
    //     return typeof window !== "undefined" && (Boolean(window.ethereum?.isCoin98) || Boolean(window.coin98)) ? 0 : 999;
    //   },
    // },
    // {
    //   title: "Blocto",
    //   icon: Blocto,
    //   connectorId: ConnectorNames.Injected,
    //   // @ts-ignore
    //   installed: typeof window !== "undefined" && Boolean(window.ethereum?.isBlocto),
    //   priority: () => {
    //     // @ts-ignore
    //     return typeof window !== "undefined" && Boolean(window.ethereum?.isBlocto) ? 0 : 999;
    //   },
    // },
];

export const mainnet = {
    ...defaultMainnet,
    rpcUrls: {
      ...defaultMainnet.rpcUrls,
      // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
      nodeReal: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7',
    },
  }
  
  export const goerli = {
    ...defaultGoerli,
    rpcUrls: {
      ...defaultGoerli.rpcUrls,
      // https://docs.nodereal.io/nodereal/meganode/meganode-api-overview/public-api-key
      nodeReal: 'https://eth-goerli.nodereal.io/v1/8a4432e42df94dcca2814fde8aea2a2e',
    },
  }

export const chainId = 5
export const connectorLocalStorageKey = "AresConnector";
export const walletLocalStorageKey = "AresWallet";
export const CHAINS = [
    goerli
]

export default connectors
