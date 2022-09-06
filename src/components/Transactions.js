import React, { useContext } from "react";

import {
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { GlobalContext } from "../context/GlobalState";

const Transactions = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <Paper
        variant="outlined"
        sx={{
          width: "350px",
          height: "40px",
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <ListItem>
          <ListItemText>{transaction.text}</ListItemText>
          <Typography
            variant="h6"
            sx={{ color: transaction.isExpense ? "red" : "green" }}
          >
            {transaction.amount}
          </Typography>
          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => deleteTransaction(transaction.id)}
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
    </>
  );
};

export default Transactions;
