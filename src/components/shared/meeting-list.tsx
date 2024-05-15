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
import { Textarea } from '../ui/textarea'

const CallList = () => {
    // const callId = "VH1ID3k5poWs";
    const { toast } = useToast();
    const [callState, setCallState] = useState<
        "instantCall" |
        "joinCall" |
        "recordedCall" |
        "PerviousCall" |
        undefined>();
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

            const description = value.description || "Instant Call";

            await call.getOrCreate({
                data: {
                    starts_at,
                    custom: {
                        description
                    }
                },
            });
            setCallDetails(call);

            if (description) {
                router.push(`/event/meeting/${call.id}`);
            }
            toast({ title: "meeting created successfuly", variant: "success" });
        } catch (error) {
            toast({ title: "faild to create meeting", variant: "success" });
        }
    }


    return (
        <div className="w-full my-5 sm:my-10">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
                <ActionBox
                    title={'Start Call'}
                    description='Start instant call share call link'
                    icon={<FaPlus className='w-6 h-6 text-zinc-50' />}
                    className='bg-orange-500'
                    handleClick={() => setCallState("instantCall")}
                />
                <ActionBox
                    title={'Join Call'}
                    description='Join existing call by pasting link'
                    icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-blue-500'
                    handleClick={() => setCallState("joinCall")}
                />
                <ActionBox
                    title={'Recorded Call'}
                    description='Join existing call by pasting link'
                    icon={<FaPlus className='w-6 h-6 text-zinc-50' />}
                    className='bg-[#9400FF]'
                    handleClick={() => router.push('/event/recorded')}
                />
                <ActionBox
                    title={'Previous Call'}
                    description='Join existing call by pasting link'
                    icon={<FaPlus className='w-6 h-6 text-zinc-50' />}
                    className='bg-[#FFC100]'
                    handleClick={() => router.push('/event/pervious')}
                />
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
            >
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="call-description" className="font-semibold">
                        Description
                    </Label>
                    <Textarea
                        id="call-description"
                        className="col-span-3 focus:ring-0 focus:ring-offset-0 focus-visible:right-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm resize-none"
                        placeholder="Enter Description"
                        onChange={(e) => setValue({ ...value, description: e.target.value.toString() })}

                    />
                </div>
            </MeetingDialog>
            <MeetingDialog
                open={callState === "joinCall"}
                type={callState}
                title='Join Call'
                description='Paste link and join your Call'
                buttonText='Enter call link'
                image='/join-call.svg'
                onClose={() => setCallState(undefined)}
                onClick={() => (value.link &&( value.link.startsWith("http://") || value.link.startsWith("https://") )) ? router.push(value.link) : toast({ title: `Enter valid Link ${!!value.link + "and" + !!value.link.startsWith('http://' || 'https://')}`, variant: "destructive" })}

            >
                <div className="w-full flex flex-col gap-2">
                    <Label htmlFor="join-call-link" className="font-semibold">
                        Enter call link
                    </Label>
                    <Input
                        id="join-call-link"
                        className="col-span-3 focus:ring-0 focus:ring-offset-0 focus-visible:right-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm"
                        placeholder="Enter Link"
                        onChange={(e) => setValue({ ...value, link: e.target.value.toString() })}

                    />
                </div>
            </ MeetingDialog>
        </div>
    )
}

export default CallList