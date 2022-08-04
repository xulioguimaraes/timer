import { LocalizationProvider } from "@mui/x-date-pickers";
import { Timer } from "./pages/Timer";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Timer />
    </LocalizationProvider>
  );
}

export default App;
