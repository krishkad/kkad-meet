"use client";
import { useGetCalls } from '@/hooks/useGetCalls';
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import Loader from './loader';
import { PiCircleNotchThin } from 'react-icons/pi';
import MeetingCard from './meeting-card';

const CallsList = ({ type }: { type: 'ended' | 'recorded' }) => {

    const { endedCalls, isLoading, recordedCalls } = useGetCalls();
    const [recordedCall, setRecordedCall] = useState<CallRecording[]>([]);

    const getCalls = () => {
        switch (type) {
            case 'ended':
                return endedCalls
            case 'recorded':
                return recordedCall
            default:
                return []
        }
    }

    const getNoCallMessage = () => {
        switch (type) {
            case 'ended':
                return "No Calls Yet"
            case 'recorded':
                return "No Recorded Calls"
            default:
                return []
        }
    }

    const callList = getCalls();
    const noCallMessage = getNoCallMessage();


    if (isLoading || !callList) return (<div className='w-full h-[calc(100dvh-128px)] flex items-center justify-center'>
        <PiCircleNotchThin className='w-[100px] h-[100px] rotate-[360] repeat-infinite animate-spin text-zinc-400' />
    </div>)

    return (
        <div className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                {callList && callList.length > 0 ? callList.map((call: Call | CallRecording, i) => {
                    return <MeetingCard key={i} />
                }) : (
                    <p>
                        {noCallMessage}
                    </p>
                )}
            </div>
        </div>
    )
}

export default CallsList