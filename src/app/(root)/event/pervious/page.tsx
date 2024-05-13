import React from 'react';
import EventNavbar from '@/components/shared/event-navbar';
import CallsList from '@/components/shared/call-list';

const Pervious = () => {
  return (
    <div className='w-full'>
      <div className="max-w-wrapper pb-4">
        <EventNavbar />
        <div className="w-full h-16 flex items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Pervious</h2>
        </div>
        <CallsList type='ended' />
      </div>
    </div>
  );
};

export default Pervious;