import React from "react";
import { Web3ReactProvider, createWeb3ReactRoot } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

const Web3ProviderNetwork = createWeb3ReactRoot("Network")

const Web3 = ({ children }) => {
    function getLibrary(provider) {
        const library = new Web3Provider(provider);
        library.pollingInterval = 6000;
        return library;
    }
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Web3ProviderNetwork getLibrary={getLibrary}>
                {children}
            </Web3ProviderNetwork>
        </Web3ReactProvider>
    );
};

export default Web3;
