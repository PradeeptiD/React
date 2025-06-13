import React, { useState } from "react";
import useInterval from "./useInterval";
import "./clock.css"

function Clock() {
    const [time, setTime] = useState(new Date());

    useInterval(() => {
        setTime(new Date());
    }, 1000);

    function formatTIme() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const maridian = hours >= 12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`
    }

    function padZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return (
        <div className="time-container">
            <p className="clock-time">{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Clock;
