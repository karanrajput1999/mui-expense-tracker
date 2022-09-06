import { Paper, Typography } from "@mui/material";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transactions from "./Transactions";

const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <Paper
        sx={{
          margin: "10px auto",
          width: "200px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Journal</Typography>
      </Paper>
      {/* Looping through transactions */}

      {transactions.map((transaction) => (
        <Transactions key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
};

export default TransactionsList;
