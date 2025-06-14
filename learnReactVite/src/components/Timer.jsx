import { useState, useEffect } from 'react'

export default function Timer(){

    const [time, setTime] =  useState(1)

    useEffect(() =>{
        const Timer = setInterval(() => setTime(time + 1), 1000)

        return function() {
            clearInterval(Timer)
        }
    }, [time])

    return(
        <>
            <p>Timer : {time}</p>
        </>
    )
}