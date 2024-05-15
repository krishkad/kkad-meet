import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";



export const useGetCalls = () => {
    const [call, setCall] = useState<Call[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const client = useStreamVideoClient();
    const { user } = useUser();

    useEffect(() => {
        const getCalls = async () => {
            if (!client || !user?.id) return;
            setIsLoading(true);
            try {
                const { calls } = await client.queryCalls({
                    filter_conditions: {
                        created_by_user_id: user?.id,
                        members: { $in: [user?.id] },
                    },
                });
                setCall(calls);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }

        }

        getCalls();
    }, [client, user?.id]);


    const now = new Date();

    const endedCalls = call.filter(({ state: { startsAt, endedAt } }: Call) => {
        return (startsAt && new Date(startsAt) < now || endedAt);
    });

    return {
        endedCalls,
        recordedCalls: call,
        isLoading
    }
}