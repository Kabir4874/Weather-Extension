import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import "fontsource-roboto";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  getStoredOptions,
  LocalStorageOptions,
  setStoredOptions,
} from "../utils/storage";
import "./options.css";
type FormState = "ready" | "saving";
const App: React.FC<{}> = () => {
  const [options, setOptions] = useState<LocalStorageOptions | null>(null);
  const [formState, setFormState] = useState<FormState>("ready");
  useEffect(() => {
    getStoredOptions().then((options) => setOptions(options));
  }, []);

  const handleHomeCityChange = (homeCity: string) => {
    setOptions({ ...options, homeCity });
  };

  const handleSaveButtonClick = () => {
    setFormState("saving");
    setStoredOptions(options).then(() => {
      setFormState("ready");
    });
  };

  const handleAutoOverlayChange = (hasAutoOverlay: boolean) => {
    setOptions({ ...options, hasAutoOverlay });
  };

  if (!options) {
    return null;
  }

  const isFieldsDisabled = formState === "saving";
  return (
    <Box mx={"10%"} my={"2%"}>
      <Card>
        <CardContent>
          <Grid container direction="column" spacing={4}>
            <Grid item>
              <Typography variant="h4">Weather Extension Options</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Home City Name</Typography>
              <TextField
                fullWidth
                placeholder="Enter a home city name"
                value={options.homeCity}
                onChange={(e) => handleHomeCityChange(e.target.value)}
                disabled={isFieldsDisabled}
              />
            </Grid>
            <Grid item>
              <Typography variant="body1">
                Auto toggle overlay on webpage load
              </Typography>
              <Switch
                color="primary"
                checked={options.hasAutoOverlay}
                onChange={(e, checked) => handleAutoOverlayChange(checked)}
                disabled={isFieldsDisabled}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveButtonClick}
                disabled={isFieldsDisabled}
              >
                {formState === "ready" ? "Save" : "Saving..."}
              </Button>
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
