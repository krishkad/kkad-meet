import React from 'react'

const MeetingPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className='w-full '>MeetingPage: {params.id}</div>
  )
}

export default MeetingPage