import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

import { toggleSwitch } from "./actions";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const labels = ["good", "fast", "cheap"];
  return (
    <Container height="100vh">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ bgcolor: "#cfe8fc", height: "100vh" }}
      >
        <FormGroup>
          {labels.map((label) => {
            return (
              <FormControlLabel
                key={uuid()}
                control={
                  <Switch
                    onChange={(e) => dispatch(toggleSwitch(label))}
                    checked={state[label]}
                    size="medium"
                  />
                }
                label={label.toUpperCase()}
              />
            );
          })}
        </FormGroup>
      </Stack>
    </Container>
  );
}

export default App;
