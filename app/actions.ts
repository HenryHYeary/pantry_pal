'use server'

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function logout() {
  const supabase = await createClient()

  supabase.auth.signOut()

  revalidatePath("/", "layout")
  redirect("/login")
}