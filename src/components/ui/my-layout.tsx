"use client";
import {
    CallingState,
    ParticipantView,
    StreamVideoParticipant,
    useCall,
    useCallStateHooks
} from '@stream-io/video-react-sdk';
import React from 'react';
import Loader from '../shared/loader';



// NOTE ---------------------> ACTUAL LAYOUT
const MyUiLayout = () => {
    const call = useCall();
    const {
        useCallCallingState,
        useLocalParticipant,
        useRemoteParticipants
    } = useCallStateHooks();
    const callingState = useCallCallingState();
    const localParticipant = useLocalParticipant();
    const remoteParticipant = useRemoteParticipants();

    if (callingState !== CallingState.JOINED) {
        return <Loader />
    };
    return (
        <div className='size-full relative'>
            <MyParticipantList participants={remoteParticipant} />
            <MyFloatingLocalParticipant participant={localParticipant} />
        </div>
    );
};

export default MyUiLayout;



// NOTE ---------------------> PARTICIPANT LIST 
export const MyParticipantList = (props: { participants: StreamVideoParticipant[] }) => {

    const { participants } = props;

    return (
        <div className="flex flex-row gap-2 w-screen">
            {participants.map((participant, i) => {
                return <div className="size-full aspect-[9/18]" key={i}>
                    <ParticipantView
                        muteAudio
                        participant={participant}
                        key={participant.sessionId}
                        className='size-full'
                    />
                </div>
            })}
        </div>
    );
};

// NOTE --------------------->  MY LOCAL PARTICIPANT 
export const MyFloatingLocalParticipant = (props: { participant?: StreamVideoParticipant }) => {
    const { participant } = props;

    return (
        <div className="absolute bottom-0 right-0 w-36 h-60 shadow-lg rounded-md">
            {participant && <ParticipantView muteAudio participant={participant} className='size-full' />}
        </div>
    )
}  
