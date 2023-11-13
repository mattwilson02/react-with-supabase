import { useCallback } from "react";
import { supabaseClient } from "../../services/supabase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const logout = useCallback(async () => {
    const response = await supabaseClient.auth.signOut();

    // TODO: display error for user
    if (response.error) return;

    navigate("/");
  }, [supabaseClient]);

  return (
    <div>
      <h1>Home</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
