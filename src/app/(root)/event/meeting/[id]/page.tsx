"use client";
import React, { useEffect, useState } from 'react';
import MeetingRoom from '@/components/shared/meeting-room';
import MeetingSetup from '@/components/shared/meeting-setup';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import { useGetCallById } from '@/hooks/useGetCallById';
import Loader from '@/components/shared/loader';

const MeetingPage = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetupComplete, setIsSetupComplete] = useState(false);

  const { call, isCallLoading } = useGetCallById(id);
  useEffect(() => {
      console.log({isCallLoading, isLoaded})
  }, [isCallLoading, isLoaded])
  
  if (isCallLoading || !isLoaded) return (
    <Loader />
  )

  return (
    <main className='w-full'>
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete={setIsSetupComplete} /> : <MeetingRoom />};
        </StreamTheme>
      </StreamCall>
    </main>
  )
}

export default MeetingPage