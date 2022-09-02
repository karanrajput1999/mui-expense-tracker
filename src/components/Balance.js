import { styled } from "@mui/material/styles";
import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const Balance = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    // ...theme.typography.body2,

    padding: theme.spacing(1),
    textAlign: "center",
  }));

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
            Balance: ₹300.00
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography variant="h6">Credited</Typography>
          <Typography variant="h6" sx={{ color: "green" }}>
            ₹400.00
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item>
          <Typography variant="h6">Debited</Typography>
          <Typography variant="h6" sx={{ color: "red" }}>
            ₹100.00
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
};

export default Balance;
