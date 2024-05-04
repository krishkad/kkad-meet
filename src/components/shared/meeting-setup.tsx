"use client";
import { VideoPreview, useCall } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {
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
                <div className="relative w-full aspect-video">
                    <VideoPreview mirror={false} className='aspect-video' />
                </div>
                <div className="w-full">
                    <div className="flex items-center space-x-2">
                        <Checkbox id="camera-mic" name='camera-mic' onClick={(e: any) => setToggleCamMicOn(!toggleCamMicOn)} />
                        <Label
                            htmlFor="camera-mic"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Turn On/Off Camera and Mic
                        </Label>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <Button onClick={()=> setIsSetupComplete(true)}>
                        Enter the Call
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MeetingSetup;