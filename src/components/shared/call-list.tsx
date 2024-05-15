"use client";
import { useGetCalls } from '@/hooks/useGetCalls';
import { Call, CallRecording } from '@stream-io/video-react-sdk';
import React, { useState } from 'react'
import Loader from './loader';
import { PiCircleNotchThin } from 'react-icons/pi';
import MeetingCard from './meeting-card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CallsList = ({ type }: { type: 'ended' | 'recorded' }) => {
    const router = useRouter();
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
                return (
                    <div className="w-full h-[calc(100dvh-146px)] flex flex-col items-center justify-center gap-4">
                        <Image src={'/empty.svg'} width={100} height={100} alt='img' />
                        <p className="text-sm font-semibold">No Calls Yet</p>
                    </div>
                )
            case 'recorded':
                return (
                    <div className="w-full h-[calc(100dvh-146px)] flex flex-col items-center justify-center gap-4">
                        <Image src={'/empty.svg'} width={100} height={100} alt='img' />
                        <p className="text-sm font-semibold">No Recorded Calls</p>
                    </div>
                )
            default:
                return ''
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
                {callList && callList.length > 0 && callList.map((call: Call | CallRecording, i) => {
                    return <MeetingCard
                        description={(call as Call).state.custom.description.substring(0, 20) || "Instant Meeting"}
                        date={(call as Call).state.startsAt?.toLocaleString()}
                        buttonText1={type === 'ended' ? undefined : "Play"}
                        buttonText2={type === 'recorded' ? 'Copy Link' : undefined}
                        handleClick={type === 'recorded' ? () => router.push(`meeting/${(call as CallRecording).url}`) : undefined}
                        isPerviousMeeting={type === 'ended'}
                        key={i} />
                })}
            </div>
            {callList && callList.length <= 0 && (
                <div className='w-full'>
                    {noCallMessage}
                </div>
            )}
        </div>
    );
};

export default CallsList;