import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "./connectors";
import MetaMaskLogo from "../images/svg/meta-mask.svg";
import WalletConnect from "../images/svg/wallet-connect.svg";

const wallets = [
    {
        title: "MetaMask",
        description: "Connect to your MetaMask Wallet",
        logo: MetaMaskLogo,
        connector: injected,
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
            case walletconnect: {
                return {
                    name: "WalletConnect",
                    logo: WalletConnect,
                };
            }
        }
    } else {
        return {};
    }
};

export { wallets, ConnectedWallet };
