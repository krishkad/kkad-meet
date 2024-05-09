"use client";
import { CallPreview, VideoPreview, useCall } from '@stream-io/video-react-sdk';
import React, { useEffect, useState } from 'react';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
    Card,
    CardContent
} from "@/components/ui/card"
import { MicOff, Video, VideoOff } from 'lucide-react';
import { Mic } from 'lucide-react';

const MeetingSetup = ({ setIsSetupComplete }: { setIsSetupComplete: (value: boolean) => void }) => {
    const [video, setVideo] = useState(false);
    const [mic, setMic] = useState(true);
    const call = useCall();

    if (!call) {
        throw new Error("useCall should be used in StreamCall");
    }

    useEffect(() => {
        if (video) {
            call.camera.disable();
        } else {
            call.camera.enable();
        }
        if (mic) {
            call.microphone.disable();
        } else {
            call.microphone.enable();
        }

    }, [video, mic, call?.microphone, call?.camera])


    return (
        <div className="max-w-wrapper overflow-hidden">
            <div className='w-full h-dvh flex flex-col items-center justify-center gap-3'>
                <h2 className="text-2xl font-bold">Setup</h2>
                <div className="relative">
                    <VideoPreview mirror={false} />
                </div>
                <div className="w-full flex justify-center">
                    <div className="flex items-center space-x-2">
                        <Card className='border-none shadow-none'>
                            <CardContent className="grid gap-6 border-none p-0">
                                <RadioGroup defaultValue="video" name='setup-specs' className="grid grid-cols-2 gap-4">
                                    <div>
                                        <RadioGroupItem value="video" id="video" className="peer sr-only" onClick={() => setVideo(!video)} checked={true} />
                                        <Label
                                            htmlFor="video"
                                            className={`aspect-square flex flex-col items-center justify-between rounded-full border-2 border-muted bg-popover p-4  ${!video && "bg-primary text-white border-primary"} font-semibold`}
                                        >

                                            {!video ? <VideoOff /> : <Video />}
                                        </Label>
                                    </div>
                                    <div>
                                        <RadioGroupItem
                                            value="mic"
                                            id="mic"
                                            className="peer sr-only"
                                            onClick={() => setMic(!mic)}
                                            checked={true}
                                        />
                                        <Label
                                            htmlFor="mic"
                                            className={`aspect-square flex flex-col items-center justify-between rounded-full border-2 border-muted bg-popover p-4  ${!mic && "bg-primary text-white border-primary"} font-semibold`}
                                        >

                                            {!mic ? <MicOff /> : <Mic />}
                                        </Label>
                                    </div>
                                </RadioGroup>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <Button onClick={() => {
                        call.join();
                        setIsSetupComplete(true);
                    }}>
                        Enter the Call
                    </Button>
                </div>
            </div>
        </div >
    );
};

export default MeetingSetup;