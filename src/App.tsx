import { LocalizationProvider } from "@mui/x-date-pickers";
import { Timer } from "./pages/Timer";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ptLocale from 'date-fns/locale/pt-BR'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptLocale}>
      <Timer />
    </LocalizationProvider>
  );
}

export default App;
