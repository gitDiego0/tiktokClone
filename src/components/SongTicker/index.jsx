import MusicIcon from '../Icons/MusicIcon'
import Marquee from 'react-fast-marquee'
import styles from './styles.module.css'

export default function SongTicker({ songTitle }) {
  return (
    <div className={styles.song}>
      <MusicIcon />
      <Marquee gradient={false} speed={100}>
        {songTitle}
      </Marquee>
    </div>
  )
}
