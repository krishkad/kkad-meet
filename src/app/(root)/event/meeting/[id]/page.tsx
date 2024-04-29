"use client";
import React, { useState } from 'react';
import VideoRoom from '@/components/shared/video-room';
import VideoSetup from '@/components/shared/video-setup';

const MeetingPage = ({ params }: { params: { id: string } }) => {
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  return (
    <div className='w-full '>
      {isSetupComplete ? <VideoSetup /> : <VideoRoom />};
    </div>
  )
}

export default MeetingPage