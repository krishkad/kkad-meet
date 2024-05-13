import React from 'react';
import EventNavbar from '@/components/shared/event-navbar';
import CallsList from '@/components/shared/call-list';

const Recorded = () => {
    return (
        <div className='w-full'>
            <div className="max-w-wrapper pb-4">
                <EventNavbar />
                <div className="w-full h-16 flex items-center">
                    <h2 className="text-2xl sm:text-3xl font-bold">Call Recordings</h2>
                </div>
                <CallsList type='recorded' />
            </div>
        </div>
    );
};

export default Recorded;