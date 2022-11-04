import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

// const POLLING_INTERVAL = 12000;
// const RPC_URL = "https://rpc-mainnet.maticvigil.com";
// const RPC_URL = "https://api.avax-test.network/ext/bc/C/rpc";

export const Chains = {
    ETHEREUM: 1,
    GOERLI: 5,
};

export const RPC_URLS = {
    [Chains.ETHEREUM]:
        "https://mainnet.infura.io/v3/fcbd5e4aded041b9bf226eb446608dd1",
    [Chains.GOERLI]:
        "https://goerli.infura.io/v3/fcbd5e4aded041b9bf226eb446608dd1",
};

export const coinbase = new WalletLinkConnector({
    url: "https://mainnet.infura.io/v3/fcbd5e4aded041b9bf226eb446608dd1",
    appName: "Web3-react coinbase",
    supportedChainIds: [Chains.ETHEREUM, Chains.GOERLI],
});

export const injected = new InjectedConnector({
    supportedChainIds: [Chains.ETHEREUM, Chains.GOERLI],
});

export const walletconnect = new WalletConnectConnector({
    rpc: RPC_URLS,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    // pollingInterval: POLLING_INTERVAL,
});
