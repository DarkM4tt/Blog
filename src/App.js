import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button
        color="secondary"
        variant="contained"
        size="large"
        endIcon={<DeleteIcon />}
        disableRipple
        disableElevation
      >
        Click Me!
      </Button>
    </div>
  );
}

export default App;
