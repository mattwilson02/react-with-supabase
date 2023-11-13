import reactLogo from "./assets/react.svg";
import { ENV } from "./constants/env";
import viteLogo from "/vite.svg";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import { useCallback, useEffect } from "react";

function App() {
  const supabaseClient = createClient(
    ENV.SUPABASE_URL,
    ENV.SUPABASE_SERVICE_KEY
  );

  const getClients = useCallback(async () => {
    const { data: clients, error } = await supabaseClient
      .from("clients")
      .select("*");

    return { clients, error };
  }, []);

  useEffect(() => {
    getClients().then((v) => console.log(v));
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Supabase</h1>
    </>
  );
}

export default App;
