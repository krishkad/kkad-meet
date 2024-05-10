
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
          <MeetingList />
        </div>
      </div>

    </div>
  )
}

export default EventPage  