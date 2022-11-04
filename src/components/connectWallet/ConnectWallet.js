import React, { useState } from "react";
// import { useWeb3React } from "@web3-react/core";
import ConnectWalletButton from "./ConnectWalletButton";
import ConnectWalletModal from "./ConnectWalletModal";
// import ErrorMessage from "../ErrorMessage";

const ConnectWallet = () => {
    const [modalState, setModalState] = useState(false);
    // const { error } = useWeb3React();
    return (
        <div>
            {/* {error && <ErrorMessage error={error} />} */}
            <ConnectWalletButton changeWalletListModalState={setModalState} />
            {modalState && (
                <ConnectWalletModal
                    changeWalletListModalState={setModalState}
                />
            )}
        </div>
    );
};

export default ConnectWallet;
