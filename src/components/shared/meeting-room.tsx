import { PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';


const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('speaker-left');

  const CallLayout = () => {
    switch (layout) {
      case 'grid':
        return <PaginatedGridLayout />

      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition={"left"} />

      default:
        return <SpeakerLayout participantsBarPosition={'right'} />

    }
  }
  return (
    <div className='w-full'>
      <div className="max-w-wrapper h-screen">
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex size-full max-w-[1000px] items-center">
            <CallLayout />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingRoom