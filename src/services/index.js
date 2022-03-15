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

export const uploadVideo = async ({ videoFile }) => {
  const filename = window.crypto.randomUUID()
  const { data, error } = await supabase.storage
    .from('videos')
    .upload(`videos/${filename}.mp4`, videoFile)

  return [error, data]
}

export const publishVideo = async ({ videoSrc, description }) => {}
