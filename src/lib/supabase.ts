import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL ?? ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY ?? ''

export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null

export async function joinWaitlist(email: string) {
  if (!supabase) {
    await new Promise((resolve) => setTimeout(resolve, 600))
    return { success: true as const }
  }

  const { error } = await supabase.from('waitlist').insert({ email })
  if (error) throw error
  return { success: true as const }
}
