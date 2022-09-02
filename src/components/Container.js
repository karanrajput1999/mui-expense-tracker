import { Box } from "@mui/material";
import React from "react";
import Balance from "./Balance";
import Transactions from "./Transactions";
import Input from "./Input";

const Container = () => {
  return (
    <Box
      sx={{
        width: 400,
        height: "auto",
        backgroundColor: "primary.dark",
        margin: "50px auto",
        paddingBottom: "30px",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Balance />
      <Transactions />
      <Input />
    </Box>
  );
};

export default Container;
