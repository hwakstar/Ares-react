import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect, coinbase } from "./connectors";
import MetaMaskLogo from "../images/svg/meta-mask.svg";
import CoinbaseLogo from "../images/svg/coinbase.svg";
import WalletConnect from "../images/svg/wallet-connect.svg";

const wallets = [
    {
        title: "MetaMask",
        description: "Connect to your MetaMask Wallet",
        logo: MetaMaskLogo,
        connector: injected,
    },
    {
        title: "Coinbase",
        description: "Connect to your Coinbase Wallet",
        logo: CoinbaseLogo,
        connector: coinbase,
    },
    {
        title: "WalletConnect",
        description: "Connect to your WalletConnect Wallet",
        logo: WalletConnect,
        connector: walletconnect,
    },
];

const ConnectedWallet = () => {
    const { connector } = useWeb3React();
    if (connector) {
        switch (connector) {
            case injected: {
                return {
                    name: "MetaMask",
                    logo: MetaMaskLogo,
                };
            }
            case coinbase: {
                return {
                    name: "Coinbase",
                    logo: CoinbaseLogo
                }
            }
            case walletconnect: {
                return {
                    name: "WalletConnect",
                    logo: WalletConnect,
                };
            }
            default: {
                return {};
            }
        }
    } else {
        return {};
    }
};

export { wallets, ConnectedWallet };
