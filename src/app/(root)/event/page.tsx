import ActionBox from '@/components/shared/action-box'
import EventNavbar from '@/components/shared/event-navbar'
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const EventPage = () => {
  return (
    <div className='w-full'>
      <div className="max-w-wrapper">
        <EventNavbar />
        <div className="w-full ">
          <div className="w-full">
            <div className="w-full h-[380px] max-sm:h-max max-sm:gap-5 p-5 bg-zinc-50 flex max-sm:flex-col justify-between rounded-sm">
              <div className="flex h-full flex-col justify-between">
                <div className="">
                  <p className="text-sm font-medium">Upcomming meeting at: </p>
                </div>
                <div className="">
                  <h1 className='text-3xl font-bold'>12:12 AM</h1>
                  <p className="text-sm font-medium"></p>
                </div>
              </div>
              <div className="relative flex w-full sm:w-[350px] h-[350px] sm:h-full">
                <Image src={'/meeting-event.svg'} priority fill sizes='height:100%,width:100%' className='object-contain' alt='img' />
              </div>
            </div>
          </div>
          <div className="w-full my-10">
            <div className="w-full grid grid-cols-4 max-sm:grid-cols-2 gap-2 sm:gap-5">
              <ActionBox title={'Start Call'} description='Start instant call share call link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-orange-500' />
              <ActionBox title={'Join Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-blue-500' />
              <ActionBox title={'Previous Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-yellow-500' />
              <ActionBox title={'Recorded Call'} description='Join existing call by pasting link' icon={<FaPlus className='w-6 h-6 text-zinc-50' />} className='bg-purple-500' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage  