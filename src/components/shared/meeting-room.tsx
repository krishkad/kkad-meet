"sue client";
import React, { useState } from 'react';
import { CallControls, PaginatedGridLayout, SpeakerLayout, useCall } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';


const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('grid');
  const router = useRouter();


  const CallLayout = () => {
    switch (layout) {
      case 'speaker-left':
        return <SpeakerLayout participantsBarPosition={'right'} />

      case 'speaker-right':
        return <SpeakerLayout participantsBarPosition={"left"} />

      default:
        return <PaginatedGridLayout />

    }
  }

  return (
    <div className='w-full overflow-hidden'>
      <div className="max-w-wrapper h-dvh">
        <div className="relative size-full">
          <div className="size-full h-[calc(100%-64px)] flex flex-col items-center justify-center">
            <div className="flex size-full max-w-[1000px] items-center text-white">
              <CallLayout />
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-max flex justify-center justify-self-stretch text-white">
            <CallControls onLeave={async () => {
              await router.push('/event');
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingRoom