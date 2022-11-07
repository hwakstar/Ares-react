import React, { useState } from "react";
// import { useWeb3React } from "@web3-react/core";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import CircularProgress from "@mui/material/CircularProgress";
import { useConnect } from 'wagmi'
import { chainId, connectorLocalStorageKey } from "../../config/connectors"

const WalletListIndex = (props) => {
    const { connector, closeModal } = props;
    const { connectAsync, connectors } = useConnect()
    // console.log(connectors)
    // const { activate } = useWeb3React();
    const [activating, setActivating] = useState(false);
    const chooseWallet = async () => {
        const findConnector = connectors.find((c) => c.id === connector.connectorId)
        setActivating(true);
        try {
            const connected = await connectAsync({ connector: findConnector, chainId })
            if (connected.chain.id !== chainId) {
                connected.connector.switchChain?.(chainId).catch(() => {
                    // mutate('session-chain-id', connected.chain.id)
                })
            }
        } catch (error) {
            console.error(error)
            window?.localStorage?.removeItem(connectorLocalStorageKey)
        }
        setActivating(false);
        closeModal();
    };
    return (
        <ListItem className="item" onClick={() => chooseWallet()}>
            <ListItemIcon className="symbol">
                {activating ? <CircularProgress /> : <img width={40} src={connector.icon} alt={connector.title} style={{cursor: "pointer"}} />}
            </ListItemIcon>
            <ListItemText
                primary={connector.title}
                secondary={activating ? "Initializing..." : connector.description}
                sx={{cursor: "pointer"}}
            />
        </ListItem>
    );
};

export default WalletListIndex;
