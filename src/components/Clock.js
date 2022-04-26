import React, {useEffect} from 'react';
import {useState} from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div>
               Сейчас: { date }
        </div>
        )

}

export default Clock;