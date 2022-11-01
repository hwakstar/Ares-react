import React from "react";
import Dialog from "@mui/material/Dialog";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import { wallets } from "../../config/wallets";
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
    //   "& .action": {
    //     padding: "2 2",
    //     paddingLeft: "3",
    //     "& h2": {
    //       width: "100%",
    //       display: "flex",
    //       justifyContent: "space-between",
    //       alignItems: "center",
    //     },
    //     "& button": {
    //       marginTop: "6",
    //       marginBottom: "6",
    //       padding: "0px",
    //     },
    //   },
    //   "& .title": {
    //     fontSize: 20,
    //     textAlign: "center",
    //     fontWeight: "bold",
    //     marginLeft: 0,
    //     margin: "auto",
    //     color: "#e55370",
    //   },
    //   "& .subtitle": {
    //     fontWeight: 600,
    //     textAlign: "center",
    //     "& b": {
    //       padding: "0 2",
    //     },
    //   },
    //   "& .walletList": {
    //     padding: "4 0",
    //     "& .item": {
    //       padding: "1 4",
    //       borderRadius: 16,
    //       border: "none",
    //       "& .symbol": {
    //         "& img": {
    //           width: 42,
    //           height: 42,
    //         },
    //       },
    //       "& .name": {
    //         "& > span": {
    //           fontWeight: 600,
    //         },
    //         "& > p": {
    //           fontWeight: 600,
    //         },
    //         padding: "0 2",
    //       },
    //     },
    //   },
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
        {wallets.map((wallet, index) => (
          <WalletListIndex
            key={`walletList-${index}`}
            wallet={wallet}
            closeModal={closeModal}
          />
        ))}
      </List>
    </CustomDialog>
  );
};

export default ConnectWalletModal;
