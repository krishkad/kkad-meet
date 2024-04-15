
import CurrentTime from '@/components/shared/current-time'
import EventNavbar from '@/components/shared/event-navbar'

import MeetingList from '@/components/shared/meeting-list'
import Image from 'next/image'
import React, { useState } from 'react'

const EventPage = () => {
  const date = new Date();
  const showTime = date.getHours()
    + ':' + date.getMinutes()
    + ":" + date.getSeconds();
  return (
    <div className='w-full'>
      <div className="max-w-wrapper">
        <EventNavbar />
        <div className="w-full ">
          <div className="w-full">
            <div className="w-full h-[380px] max-sm:h-max max-sm:gap-5 p-5 bg-zinc-50 flex max-sm:flex-col justify-between rounded-sm">
              <div className="flex h-full flex-col justify-between">
                <div className="">
                  <p className="text-sm font-medium">Upcomming meeting at: </p>
                </div>
                <div className="">
                  <h1 className='text-3xl font-bold'><CurrentTime /></h1>
                  <p className="text-sm font-medium"></p>
                </div>
              </div>
              <div className="relative flex w-full sm:w-[350px] h-[350px] sm:h-full">
                <Image src={'/meeting-event.png'} priority fill sizes='height:100%,width:100%' className='object-contain' alt='img' />
              </div>
            </div>
          </div>
          <MeetingList />
        </div>
      </div>

    </div>
  )
}

export default EventPage  