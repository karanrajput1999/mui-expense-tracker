<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream
import React from "react";
=======
import React, { useContext } from "react";
>>>>>>> Stashed changes
=======
import React, { useContext } from "react";
>>>>>>> Stashed changes
=======
import React, { useContext } from "react";
>>>>>>> Stashed changes
import {
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
<<<<<<< Updated upstream
<<<<<<< Updated upstream
<<<<<<< Updated upstream

const Transactions = ({ transaction }) => {
  return (
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
        <Typography variant="h6" sx={{ color: "green" }}>
          {transaction.amount}
        </Typography>
        <IconButton edge="end" aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Paper>
=======
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
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
          <Typography variant="h6" sx={{ color: "green" }}>
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
>>>>>>> Stashed changes
  );
};

export default Transactions;
