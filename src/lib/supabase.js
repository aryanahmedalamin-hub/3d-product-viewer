import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder'

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false // Adhering to "No localStorage/sessionStorage" constraint
  }
})

// Mock functions for POC
export const saveOrder = async (order) => {
  console.log('Saving order to Supabase:', order)
  return { data: { id: 'order_123' }, error: null }
}

export const triggerN8N = async (event, data) => {
  console.log(`Triggering n8n automation for ${event}:`, data)
  // fetch('n8n-webhook-url', { method: 'POST', body: JSON.stringify({ event, data }) })
}
