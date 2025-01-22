import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function requireUser() {
  const supabase = await createClient()

  const user = supabase.auth.getUser()

  console.log(user)

  if (!user) {
    redirect("/login")
  }

  return user
}
