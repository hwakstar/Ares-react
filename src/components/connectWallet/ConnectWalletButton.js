import React from "react";
// import { useWeb3React } from "@web3-react/core";
import { useAccount, useDisconnect } from 'wagmi'
import { reduceAddress } from "../../utils/common";

const customStyle = {
    border: "none",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "0.8em",
    borderRadius: "1em",
    marginLeft: "1.5em"
}

const ConnectWalletButton = (props) => {
    const { isConnected, address } = useAccount()
    const { disconnect } = useDisconnect()
    const { changeWalletListModalState } = props;
    // const { account, deactivate } = useWeb3React();
    const openWalletListModal = () => {
        changeWalletListModalState(true);
    };
    const closeWalletListModal = () => {
        disconnect()
    }
    return (
        <>
            {isConnected ? (
                <button style={customStyle} onClick={closeWalletListModal}>{reduceAddress(address)}</button>
            ) : (
                <button style={customStyle} onClick={openWalletListModal}>Connect Wallet</button>
            )}
        </>
    );
};

export default ConnectWalletButton;
