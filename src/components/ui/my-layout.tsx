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
            {remoteParticipant.length + 1 <= 2 ? <>
                <MyParticipantList participants={remoteParticipant} />
                <MyFloatingLocalParticipant participant={localParticipant} />
            </>: <>
            <div className="grid grid-cols-2 gap-2">
                <MyParticipantList2 participants={remoteParticipant} />
                <MyFloatingLocalParticipant2 participant={localParticipant} />

            </div>
            </>
            }
        </div>
    );
};

export default MyUiLayout;



// NOTE ---------------------> PARTICIPANT LIST 
export const MyParticipantList = (props: { participants: StreamVideoParticipant[] }) => {

    const { participants } = props;

    return (
        <div className="flex flex-row justify-center gap-2 size-full">
            {participants.map((participant, i) => {
                return <div className="max-sm:size-full aspect-[9/18]" key={i}>
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

// NOTE ---------------------> PARTICIPANT LIST 
export const MyParticipantList2 = (props: { participants: StreamVideoParticipant[] }) => {

    const { participants } = props;

    return (
        <>
            {participants.map((participant, i) => {
                return <div className="max-sm:size-full aspect-[9/18]" key={i}>
                    <ParticipantView
                        muteAudio
                        participant={participant}
                        key={participant.sessionId}
                        className='size-full'
                    />
                </div>
            })}
        </>
    );
};

// NOTE --------------------->  MY LOCAL PARTICIPANT 
export const MyFloatingLocalParticipant2 = (props: { participant?: StreamVideoParticipant }) => {
    const { participant } = props;

    return (
        <div className="size-full rounded-md">
            {participant && <ParticipantView muteAudio participant={participant} className='size-full' />}
        </div>
    )
}  
