import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
  {
    id: 1,
    author: '@pepe',
    description: 'Mario Kart Streamers',
    likes: 123,
    shares: 1234,
    comments: 333,
    songTitle: 'sonido original - pacomer',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/9c95c5616aab5ee3d07df4c739f82e26/622685fa/video/tos/alisg/tos-alisg-pve-0037/645f61f6e12849e0bbfbcddca447bb79/?a=1988&br=4144&bt=2072&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThED4QDXq&l=2022030716234001022301604817F1398C&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anQ7b2g6ZnhmOzMzODgzNEApOjY0NTk3ZTs8NzQ7NzM0O2cvbHNwcjRfc2ZgLS1kLy1zczIuXjM0YWNeNC9jY2NjYDQ6Yw%3D%3D&vl=&vr=',
  },
  {
    id: 2,
    author: '@junito',
    description: `
    A quién le salió mejor el paso?😎 @rickylemon99 @Daniela Arredondo @karenbarreraoficial @ramonvillaaa @mia.salinass @rosy.salinass #fyp #comedy`,
    likes: 123,
    shares: 1234,
    comments: 333,
    songTitle: 'sonido original - pacomer',
    albumCover: '',
    src: 'https://v16-webapp.tiktok.com/e75183a9e101a35b9ecb8b932d13420a/622686b4/video/tos/useast2a/tos-useast2a-ve-0068c002/e2f7a26310e847b5b0f1c7beb473041f/?a=1988&br=3260&bt=1630&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-307nz7ThHY4QDXq&l=2022030716244501022311707927EC332A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amk2aWc6Zm54OzMzNzczM0ApZGQ8NzdpO2Q1NzM6PDppaWdyNGdecjQwMjZgLS1kMTZzczYxXi0uMi0yMmFiLi4uLy46Yw%3D%3D&vl=&vr=',
  },
]
export default function FeedVideos() {
  return VIDEOS.map((video) => (
    <div key={video.id} className={styles.item}>
      <VideoPlayer {...video} />
    </div>
  ))
}
