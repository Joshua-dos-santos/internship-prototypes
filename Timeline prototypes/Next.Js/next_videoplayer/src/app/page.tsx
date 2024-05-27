import Video from 'next-video';

export default function Home() {
  return (
    <Video className='player' src="/video.mp4" />
  );
}
