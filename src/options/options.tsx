import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import "fontsource-roboto";
import React from "react";
import ReactDOM from "react-dom";
import "./options.css";
const App: React.FC<{}> = () => {
  return (
    <Box>
      <Card>
        <CardContent>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">Weather Extension Options</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Home City Name</Typography>
              <TextField fullWidth placeholder="Enter a home city name" />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
