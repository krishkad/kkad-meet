"use client"
import { tokenProvider } from '@/actions/token.actions';
import Loader from '@/components/shared/loader';
import { useUser } from '@clerk/nextjs';
import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
} from '@stream-io/video-react-sdk';
import { ReactNode, useEffect, useState } from 'react';

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KAY;

// const apiKey = "mmhfdzb5evj2"
// const userId = "Quinlan_Vos"
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiUXVpbmxhbl9Wb3MiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL1F1aW5sYW5fVm9zIiwiaWF0IjoxNzE1NjY0NjE2LCJleHAiOjE3MTYyNjk0MjF9.wcukqAgmiqsD98iTJWUyuO1G-cpUYdmzw-iWwrE01UE"

export const StreamProvider = ({ children }: { children: ReactNode }) => {
    const [videoClient, setVideoClient] = useState<StreamVideoClient>();
    const { user, isLoaded } = useUser();
    useEffect(() => {
        if (!user || !isLoaded) return;
        if (!apiKey) throw new Error('Stream API key missing');

        const client = new StreamVideoClient({
            apiKey,
            user: {
                id: user?.id,
                username: user?.username,
                name: user?.fullName,
                image: user?.imageUrl,
            } as User,
            tokenProvider
        });
        setVideoClient(client);

    }, [user, isLoaded])
    if (!videoClient) return <Loader />
    return (
        <StreamVideo client={videoClient}>
            {children}
        </StreamVideo>
    );
};