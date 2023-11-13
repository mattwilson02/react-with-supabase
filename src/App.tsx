import { BrowserRouter } from "react-router-dom";
import "./App.css";

import { Routes } from "./routes";

function App() {
  // const getClients = useCallback(async () => {
  //   const { data: clients, error } = await supabaseClient
  //     .from("clients")
  //     .select("*");

  //   return { clients, error };
  // }, []);

  // useEffect(() => {
  //   getClients().then((v) => console.log(v));
  // }, []);

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
