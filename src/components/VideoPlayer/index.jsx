import clsx from 'clsx'
import { useState, useRef } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions'

// const SRC =
//   'https://v16-webapp.tiktok.com/208de1130461e4512e97f6be17bab4b2/621cefb6/video/tos/useast2a/tos-useast2a-ve-0068c004/e653995ba7214d51866c5db1d38f1e43/?a=1988&br=3016&bt=1508&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7Thz7VcDXq&l=202202280951400102230811570BB9617B&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=am88ZmQ6ZnJ0OzMzNzczM0ApM2gzOzQ3ZDtpN2UzOWdkPGdjb2ZhcjRvLWFgLS1kMTZzc2EvNTYxNi9jNTBiMjVfYTM6Yw%3D%3D&vl=&vr="'

export default function VideoPlayer({ src }) {
  const [playing, setPlaying] = useState(false)
  const video = useRef(null)

  const handlePlay = () => {
    const { current: videoEl } = video

    playing ? videoEl.pause() : videoEl.play()

    setPlaying(!playing)
  }

  const playerClassname = clsx(styles.player, {
    [styles.hidden]: playing,
  })

  return (
    <div className={styles.wrapper} onClick={handlePlay}>
      <video
        className={styles.video}
        src={src}
        loop
        controls={false}
        ref={video}
      />
      <span className={playerClassname} />
      <VideoPlayerActions />
    </div>
  )
}
