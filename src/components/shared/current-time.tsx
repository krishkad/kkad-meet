"use client"
import React, { useEffect, useState } from 'react'

const CurrentTime = () => {

    const [isload, setIsload] = useState(false);


    useEffect(() => {
        setIsload(true)
    }, [isload])

    let time = new Date().toLocaleTimeString()

    const [ctime, setTime] = useState(time)
    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        setTime(time)
    }
    setInterval(UpdateTime)




    if (!isload) return null
    return ctime
}

export default CurrentTime