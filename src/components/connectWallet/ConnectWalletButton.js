import React from "react";
import { useWeb3React } from "@web3-react/core";
import { reduceAddress } from "../../utils/common";

const ConnectWalletButton = (props) => {
    const { changeWalletListModalState } = props;
    const { account } = useWeb3React();
    console.log(account)
    const openWalletListModal = () => {
        changeWalletListModalState(true);
    };
    return (
        <>
            {account ? (
                <button>{reduceAddress(account)}</button>
            ) : (
                <button onClick={openWalletListModal}>Connect Wallet</button>
            )}
        </>
    );
};

export default ConnectWalletButton;
