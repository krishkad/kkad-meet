"sue client";
import React, { useState } from 'react';
import { CallControls, PaginatedGridLayout, SpeakerLayout, useCall } from '@stream-io/video-react-sdk';
import { useRouter } from 'next/navigation';
import MyUiLayout from '../ui/my-layout';

type CallLayoutType = 'grid' | 'speaker-left' | 'speaker-right';


const MeetingRoom = () => {
  const [layout, setLayout] = useState<CallLayoutType>('grid');
  const router = useRouter();
  const call = useCall();


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
    <div className='w-full overflow-hidden bg-[#252525]'>
      <div className="max-w-wrapper h-dvh">
        <div className="relative size-full">
          <div className="size-full h-[calc(100%-64px)] flex flex-col items-center justify-center">
            <div className="relative flex size-full max-w-[1000px] items-center justify-center text-white">
              {/* <CallLayout /> */}
              <MyUiLayout />
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-max flex justify-center justify-self-stretch text-white">
            <CallControls onLeave={async () => {
              await call?.endCall();
              router.push('/event');
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetingRoom