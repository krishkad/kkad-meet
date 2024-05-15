import React from 'react'
import { Video, Videotape } from 'lucide-react'
import { Button } from '../ui/button'

interface MeetingCard {
    description: string;
    date: string | number | undefined;
    isPerviousMeeting?: boolean;
    buttonText1: string | undefined;
    buttonText2?: string | undefined;
    handleClick?: () => void | undefined;
    links?: string;
}

const MeetingCard = ({ description, date, isPerviousMeeting, buttonText1, buttonText2, handleClick, links }: MeetingCard) => {
    return (
        <div className='size-full p-4 border rounded-sm bg-[#fafafa]'>
            <div className="">
                {isPerviousMeeting ? <Videotape /> : <Video />}
            </div>
            <div className="w-full flex flex-col mt-4 gap-4">
                <div className="">
                    <h2 className="text-lg font-bold">{description}</h2>
                    <p className="text-xs font-semibold text-muted-foreground">{date}</p>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        ok
                    </div>
                    <div className=" flex items-center gap-2">
                        {buttonText1 && <Button onClick={handleClick}>{buttonText1}</Button>}
                        {buttonText2 && <Button variant={'ghost'}>{buttonText2}</Button>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetingCard