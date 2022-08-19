import { Typography, useMediaQuery } from '@mui/material';
import './App.css';

function printBool(b) {
  return b ? "true" : "false";
}

function App() {
  const hoverNone = useMediaQuery("(hover: none)");
  const hoverHover = useMediaQuery("(hover: hover)");

  const pointerNone = useMediaQuery("(pointer: none)");
  const pointerCoarse = useMediaQuery("(pointer: coarse)");
  const pointerFine = useMediaQuery("(pointer: fine)");

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h6">Hover: {printBool(hoverNone)}, {printBool(hoverHover)}</Typography>
        <Typography variant="h6">Pointer: {printBool(pointerNone)}, {printBool(pointerCoarse)}, {printBool(pointerFine)}</Typography>
      </header>
    </div>
  );
}

export default App;
