import React from 'react'
import Image from 'next/image'
const EventBox = ({events}) => {
    console.log(events)
  return (
    <div className='bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative'> 
      <div className='flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4'>
        <div className='hidden xl:flex w-[400px]'><Image src={'/assets/events/singer.png'} width={358}
        height={489}
        priority
        quality={100}
        alt=''/></div>
        <div className='flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scroll-thin scrollbar-thumb-accent-DEFAUlt scrollbar-track-white/10 xl:pr-6'>
          {events.map(event=> {
            return <div 
            key={event.id}
            className='flex flex-col xl:flex-row items-center justify-between gap-y-4 border-b border-white/10 pb-10 xl:pb-3 last-of-type:border-none first-of-type:pt-0 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0'
            >
              <div className='flex flex-col xl:flex-row items-center gap-x-4'>
                {/*  day & months */}
                <div className='flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0'>
                  <div className='text-[44px] font-black text-accent-DEFAUlt'>{event.date.day}</div>
                  <div className='text-[20px] font-extrabold '>{event.date.month}</div>
                </div>
                {/* Locations */}
                <div>
                  <div>{`${event.Location.city}, ${event.Location.country}`}</div>
                  <div>
                    <div>location icon</div>
                    <div>{event.Location.adress}</div>
                  </div>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
    
  )
}

export default EventBox