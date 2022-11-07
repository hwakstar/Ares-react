import React from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import connectors from "../../config/connectors";
import WalletListIndex from "./WalletListIndex";

const CustomDialog = styled(Dialog)(({ theme }) => ({
  "&": {
    width: "100vw",
    "& .MuiBackdrop-root": {
      backgroundColor: "#000000cc !important",
    },
    "& .MuiPaper-root": {
      maxWidth: "800px !important",
      minWidth: "300px !important",
      padding: "2em 1em 1em",
      margin: "0",
      borderRadius: "15px",
      width: "inherit",
      background: "#141414dd",
      "& h2": {
        fontSize: "26px",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontFamily: "Rajdhani",
        color: "#dcb533",
        textAlign: "center",
        marginBottom: "30px"
      },
      "& .MuiList-root": {
        "& .MuiListItemText-root": {
          "& .MuiTypography-root": {
              color: "#ffffff"
          }
        }
      }
    },
  },
}));

const ConnectWalletModal = (props) => {
  const { changeWalletListModalState } = props;
  const closeModal = () => {
    changeWalletListModalState(false);
  };
  return (
    <CustomDialog
      open
      onClose={closeModal}
      fullWidth={true}
    >
      <h2>Connect Wallet</h2>
      <List className="walletList">
        {connectors.map((connector, index) => (
          <WalletListIndex
            key={`walletList-${index}`}
            connector={connector}
            closeModal={closeModal}
          />
        ))}
      </List>
    </CustomDialog>
  );
};

export default ConnectWalletModal;
