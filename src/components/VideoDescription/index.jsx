import AlbumDisk from './AlbumDisk'
import SongTicker from '../SongTicker/index'

import styles from './styles.module.css'

export default function VideoDescription({
  username,
  description,
  albumCover,
  songTitle,
}) {
  return (
    <footer className={styles.description}>
      <div className={styles.textWrapper}>
        <section>
          <strong>
            <a className={styles.author} href={`/users/${username}`}>
              @{username}
            </a>
          </strong>
          <p className={styles.text}>{description}</p>
        </section>
        <SongTicker songTitle={songTitle} />
      </div>
      <div className={styles.albumImage}>
        <AlbumDisk albumCover={albumCover} />
      </div>
    </footer>
  )
}
