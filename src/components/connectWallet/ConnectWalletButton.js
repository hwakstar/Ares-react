import React from "react";
import { useWeb3React } from "@web3-react/core";
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
    const { changeWalletListModalState } = props;
    const { account } = useWeb3React();
    const openWalletListModal = () => {
        changeWalletListModalState(true);
    };
    return (
        <>
            {account ? (
                <button style={customStyle}>{reduceAddress(account)}</button>
            ) : (
                <button style={customStyle} onClick={openWalletListModal}>Connect Wallet</button>
            )}
        </>
    );
};

export default ConnectWalletButton;
