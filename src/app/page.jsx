import Events from '@/components/events/Events';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main>
      <Hero/>
      <Events/>
      <div className='h-[4000px]'></div>
    </main>
  )
}
