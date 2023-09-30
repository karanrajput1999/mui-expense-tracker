import React, { useState, useContext } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { GlobalContext } from "../context/GlobalState";

const Input = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const AddIncome = () => {
    if (text === "" || amount === "") {
      alert("Please fill all the details...");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: amount + ".00",
        isExpense: false,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount("");
    }
  };

  const AddExpense = () => {
    if (text === "" || amount === "") {
      alert("Please fill all the details...");
    } else {
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: amount + ".00",
        isExpense: true,
      };

      addTransaction(newTransaction);
      setText("");
      setAmount("");
    }
  };

  return (
    <form>
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
              // type="submit"
              onClick={AddIncome}
              endIcon={<CurrencyRupeeIcon />}
              sx={{ marginTop: "20px", padding: "8px 11px" }}
            >
              Income
            </Button>
            <Button
              variant="contained"
              color="error"
              // type="submit"
              onClick={AddExpense}
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
