"use client";
import { VideoPreview, useCall } from '@stream-io/video-react-sdk'
import React, { useEffect, useState } from 'react'

const MeetingSetup = () => {
    const [toggleCamMicOn, setToggleCamMicOn] = useState(false);
    const call = useCall();

    if (!call) {
        throw new Error("useCall should be used in StreamCall");
    }
    useEffect(() => {

        if (toggleCamMicOn) {
            call?.microphone.disable();
            call?.camera.disable();
        } else {
            call?.microphone.enable();
            call?.camera.enable();

        }
    }, [toggleCamMicOn, call?.microphone, call?.camera]);

    return (
        <div className="max-w-wrapper">

            <div className='w-full h-full flex flex-col items-center justify-center gap-3'>
                <h2 className="text-2xl font-bold">Setup</h2>
                <div className="relative w-full aspect-square">
                    <VideoPreview mirror={false} className='absolute inset-0' />
                </div>
                <div className="w-full">

                </div>
            </div>
        </div>
    )
}

export default MeetingSetup