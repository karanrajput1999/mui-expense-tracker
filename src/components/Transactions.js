import {
  IconButton,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

const Transactions = () => {
  return (
    <>
      <Paper
        sx={{
          marginTop: "10px",
          width: "200px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">Journal</Typography>
      </Paper>
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
          <ListItemText>Salary</ListItemText>
          <Typography variant="h6" sx={{ color: "green" }}>
            ₹300.00
          </Typography>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
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
          <ListItemText>Grocery</ListItemText>
          <Typography variant="h6" sx={{ color: "red" }}>
            ₹30.00
          </Typography>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
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
          <ListItemText>Payment</ListItemText>
          <Typography variant="h6" sx={{ color: "green" }}>
            ₹500.00
          </Typography>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
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
          <ListItemText>Recharge</ListItemText>
          <Typography variant="h6" sx={{ color: "red" }}>
            ₹100.00
          </Typography>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </Paper>
    </>
  );
};

export default Transactions;
