import { supabase } from './supabase.js'

export const getVideos = async () => {
  const { data, error } = await supabase
    .from('video')
    .select(
      `*, user:user_id (
        avatar,
      username,
      id
    )`
    )
    .order('created_at', { ascending: false })

  return [error, data]
}
