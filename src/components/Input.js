import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Input = () => {
  const { addTransaction } = useContext(GlobalContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <form onSubmit={onSubmit}>
      <Paper
        sx={{
          width: "250px",
          height: "auto",
          marginTop: "10px",
          paddingBottom: "20px",
        }}
      >
        <Grid
          sx={{
            paddingTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Add Transaction</Typography>

          <TextField
            id="filled-basic"
            label="Transaction Name"
            variant="filled"
            value={text}
            onChange={(e) => setText(e.target.value)}
            sx={{ marginTop: "10px" }}
          />
          <TextField
            id="filled-basic"
            label="Amount"
            variant="filled"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ marginTop: "20px" }}
          />
          <Grid>
            <Button
              variant="contained"
              color="success"
              type="submit"
              endIcon={<CurrencyRupeeIcon />}
              sx={{ marginTop: "20px", padding: "8px 11px" }}
            >
              Income
            </Button>
            <Button
              variant="contained"
              color="error"
              type="submit"
              endIcon={<CurrencyRupeeIcon />}
              sx={{ marginTop: "20px", padding: "8px", marginLeft: "5px" }}
            >
              Expense
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  );
};

export default Input;
