import { ENV } from "../../constants/env";
import { createClient } from "@supabase/supabase-js";

export const supabaseClient = createClient(
  ENV.SUPABASE_URL,
  ENV.SUPABASE_SERVICE_KEY
);
