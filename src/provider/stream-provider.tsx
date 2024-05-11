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
// const userId = "IG_88"
// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiSUdfODgiLCJpc3MiOiJodHRwczovL3Byb250by5nZXRzdHJlYW0uaW8iLCJzdWIiOiJ1c2VyL0lHXzg4IiwiaWF0IjoxNzE1NDE5Mjg2LCJleHAiOjE3MTYwMjQwOTF9.bwjyvU6-MDrIMIdCpuG-JxFqOurMAiy08FXPl1JX1Lw"

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