"use client"
import { useState } from 'react'
import ActionBox from '@/components/shared/action-box'
import MeetingDialog from '@/components/shared/meeting-dialog'
import { FaPlus } from 'react-icons/fa'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { useUser } from '@clerk/nextjs'
import { Call, useStreamVideoClient } from '@stream-io/video-react-sdk'
import { useRouter } from 'next/navigation'
import { useToast } from '../ui/use-toast'
import { ToastAction } from '../ui/toast'

const CallList = () => {
    const { toast } = useToast();
    const [callState, setCallState] = useState<"instantCall" | "joinCall" | "recordedCall" | "PerviousCall" | undefined>();
    const { user } = useUser();
    const client = useStreamVideoClient();
    const [value, setValue] = useState({
        dateTime: new Date(),
        description: "",
        link: ""
    });
    const [callDetails, setCallDetails] = useState<Call>();
    const router = useRouter();

    const createMeeting = async () => {
        if (!user || !client) return;
        try {
            const id = crypto.randomUUID();
            const call = client.call('default', id);

            if (!call) throw new Error("faild to create call");

            const starts_at = value.dateTime.toISOString() || new Date(Date.now()).toISOString();

            const description = value.description || "Instant Meeting";

            await call.getOrCreate({
                data: {
                    starts_at,
                    custom: {
                        description
                    }
                },
            });
            setCallDetails(call);

            if (!value.description) {
                router.push(`/event/meeting/${call.id}`);
            }
            toast({ title: "meeting created", variant: "default", action: <ToastAction altText="Share Link">Share Link</ToastAction>, });
        } catch (error) {
            toast({ title: "faild to create meeting" });
        }
    }

    return (
        <div className="w-full my-10">
            <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 gap-2 sm:gap-5">
                <ActionBox title={'Start Call'} description='Start instant call share call link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-orange-500' handleClick={() => setCallState("instantCall")} />
                <ActionBox title={'Join Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-blue-500' handleClick={() => setCallState("joinCall")} />
                <ActionBox title={'Recorded Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-purple-500' handleClick={() => setCallState("recordedCall")} />
                <ActionBox title={'Previous Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-yellow-500' handleClick={() => setCallState("PerviousCall")} />
            </div>
            <MeetingDialog
                open={callState === "instantCall"}
                type={callState}
                title='Start Instant Call'
                description='Click on start call and share the link with your family/friend'
                buttonText='Start Call'
                image='/start-call.svg'
                onClose={() => setCallState(undefined)}
                onClick={createMeeting}
            />
            <MeetingDialog
                open={callState === "joinCall"}
                type={callState}
                title='Join Call'
                description='Paste link and join your Call'
                buttonText='Enter call link'
                image='/join-call.svg'
                onClose={() => setCallState(undefined)}
            >
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="join-call-link" className="font-semibold">
                        Enter call link
                    </Label>
                    <Input
                        id="join-call-link"
                        className="col-span-3"
                        placeholder="Enter Link"
                    />
                </div>
            </ MeetingDialog>
        </div>
    )
}

export default CallList