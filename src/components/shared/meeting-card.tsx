import { CalendarCheck } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const MeetingCard = () => {
    return (
        <div className='size-full p-4 border rounded-sm bg-[#fafafa]'>
            <div className="">
                <CalendarCheck />
            </div>
            <div className="w-full flex flex-col mt-4 gap-4">
                <div className="">
                    <h2 className="text-lg font-bold">Instant Meeting</h2>
                    <p className="text-sm font-semibold text-muted-foreground">Lorem, ipsum dolor.</p>
                </div>
                <div className="flex justify-between">
                    <div className="">
                        ok
                    </div>
                    <div className=" flex items-center gap-2">
                        <Button>Play</Button>
                        <Button variant={'ghost'}>View</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetingCard