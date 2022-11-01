import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircularProgress from "@mui/material/CircularProgress";

const WalletListIndex = (props) => {
    const { wallet, closeModal } = props;
    const { activate } = useWeb3React();
    const [activating, setActivating] = useState(false);
    const chooseWallet = async () => {
        setActivating(true);
        console.log(wallet)
        await activate(wallet.connector);
        setActivating(false);
        closeModal();
    };
    return (
        <ListItem button className="item" onClick={() => chooseWallet()}>
            <ListItemIcon className="symbol">
                {activating ? <CircularProgress /> : <img width={40} src={wallet.logo} />}
            </ListItemIcon>
            <ListItemText
                primary={wallet.title}
                secondary={activating ? "Initializing..." : wallet.description}
            />
        </ListItem>
    );
};

export default WalletListIndex;
