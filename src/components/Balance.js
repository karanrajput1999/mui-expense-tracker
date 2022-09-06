import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
  }));

  let Balance = transactions.reduce((acc, transaction) => {
    if (transaction.isExpense) {
      acc += parseInt(transaction.amount);
    }
    return acc;
  }, 0);

  let Income = transactions.reduce((acc, transaction) => {
    if (!transaction.isExpense) {
      acc += parseInt(transaction.amount);

      Balance = acc;
    }
    return acc;
  }, 0);

  const Expense = transactions.reduce((acc, transaction) => {
    if (transaction.isExpense) {
      acc -= parseInt(transaction.amount);
      Balance = Income - Math.abs(acc);

      console.log();
    }
    return acc;
  }, 0);

  return (
    <Grid
      container
      spacing={1}
      sx={{
        paddingTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid item xs={8} sx={{ margin: " 0 20px" }}>
        <Item>
          <Typography variant="h5" sx={{ color: "green" }}>
            Balance: {Balance}
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography variant="h6">Credited</Typography>
          <Typography variant="h6" sx={{ color: "green" }}>
            {/* ₹400.00 */}
            {Income}
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography variant="h6">Debited</Typography>
          <Typography variant="h6" sx={{ color: "red" }}>
            {/* ₹100.00 */}

            {Expense}
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Balance;
