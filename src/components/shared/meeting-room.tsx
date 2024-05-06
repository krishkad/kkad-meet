import React, { useState } from 'react';
import { CallControls, PaginatedGridLayout, SpeakerLayout } from '@stream-io/video-react-sdk';

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
    <div className='w-full overflow-hidden'>
      <div className="relative max-w-wrapper h-screen">
        <div className="size-full h-[calc(100vh-64px)] flex flex-col items-center justify-center">
          <div className="flex size-full max-w-[1000px] items-center">
            <CallLayout />
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-max flex items-center justify-center">
          <CallControls />
        </div>
      </div>
    </div>
  )
}

export default MeetingRoom