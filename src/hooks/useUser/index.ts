import { useCallback } from "react";
import { supabaseClient } from "../../services/supabase";

export const useUser = () => {
  const getUser = useCallback(async () => {
    const response = await supabaseClient.auth.getUser();

    if (response.error) return;

    return response?.data?.user;
  }, [supabaseClient]);

  return {
    getUser,
  };
};
