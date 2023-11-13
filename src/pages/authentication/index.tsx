import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabaseClient } from "../../services/supabase";

type FormValues = {
  email: string;
  password: string;
};

const Authentication = () => {
  const [hasAccount, setHasAccount] = useState(true);
  const navigate = useNavigate();
  const { handleSubmit, register, reset } = useForm<FormValues>();

  const handleAuthentication = useCallback(
    async ({ email, password }: FormValues) => {
      if (hasAccount) {
        const response = await supabaseClient.auth.signInWithPassword({
          email,
          password,
        });

        // TODO: display an error for user
        if (response.error) return;

        navigate("/home");
      } else {
        const response = await supabaseClient.auth.signUp({
          email,
          password,
        });

        // TODO: display an error for user
        if (response.error) return;

        navigate("/home");
      }

      reset();
    },
    []
  );

  return (
    <div>
      <h1>Authentication</h1>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        onSubmit={handleSubmit(handleAuthentication)}
      >
        <text
          style={{ textDecorationLine: "underline" }}
          onClick={() => setHasAccount((prev) => !prev)}
        >
          Dont have an account? Sign up here
        </text>
        <input placeholder="email" {...register("email", { required: true })} />
        <input
          placeholder="password"
          type="password"
          {...register("password", { required: true })}
        />
        <button type="submit">{hasAccount ? "Login" : "Sign up"}</button>
      </form>
    </div>
  );
};

export default Authentication;
