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

  const breakPointXs = useMediaQuery("(min-width: 0px)");
  const breakPointSm = useMediaQuery("(min-width: 600px)");
  const breakPointMd = useMediaQuery("(min-width: 900px)");
  const breakPointLg = useMediaQuery("(min-width: 1200px)");
  const breakPointXl = useMediaQuery("(min-width: 1536px)");

  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h6">Hover: {printBool(hoverNone)}, {printBool(hoverHover)}</Typography>
        <Typography variant="h6">Pointer: {printBool(pointerNone)}, {printBool(pointerCoarse)}, {printBool(pointerFine)}</Typography>
        <Typography variant="h6">Breakpoint: {[breakPointXs, breakPointSm, breakPointMd, breakPointLg, breakPointXl].map(printBool).join(", ")}</Typography>
      </header>
    </div>
  );
}

export default App;
