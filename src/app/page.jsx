import Albums from '@/components/albums/Albums';
import Events from '@/components/events/Events';
import Hero from '@/components/Hero';
import Player from '@/components/Player';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Player/>
      <Events/>
      <Albums/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
