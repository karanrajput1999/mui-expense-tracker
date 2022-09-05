import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
const Input = () => {
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
            sx={{ marginTop: "10px" }}
          />
          <TextField
            id="filled-basic"
            label="Amount"
            variant="filled"
            type="number"
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
