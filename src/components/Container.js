import { Box } from "@mui/material";
import React from "react";
import Balance from "./Balance";
import TransactionsList from "./TransactionsList";
import Input from "./Input";

const Container = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
      }}
      className="container"
    >
      <Balance />
      <TransactionsList />
      <Input />
    </Box>
  );
};

export default Container;
