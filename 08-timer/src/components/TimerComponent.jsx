import React from 'react';
import { useTimer } from '../hooks/useTimer';

function TimerComponent() {
    const { time, isRunning, start, pause, reset } = useTimer();

    return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Timer: {time}s</h1>
        <p>Status: {isRunning ? '⏱ Running' : '⏸ Paused'}</p>
        <button onClick={start} style={{ margin: '0.5rem' }}>Start</button>
        <button onClick={pause} style={{ margin: '0.5rem' }}>Pause</button>
        <button onClick={reset} style={{ margin: '0.5rem' }}>Reset</button>
    </div>
    );
}

export default TimerComponent;
