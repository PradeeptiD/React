import { useReducer, useEffect, useCallback } from 'react';

const initialState = {
    time: 0,
    isRunning: false,
};

function timerReducer(state, action) {
    switch (action.type) {
        case 'START':
        return { ...state, isRunning: true };
        case 'PAUSE':
        return { ...state, isRunning: false };
        case 'RESET':
        return { time: 0, isRunning: false };
        case 'TICK':
        return state.isRunning ? { ...state, time: state.time + 1 } : state;
        default:
        return state;
    }
}

export function useTimer() {
    const [state, dispatch] = useReducer(timerReducer, initialState);

    useEffect(() => {
        let interval = null;

        if (state.isRunning) {
        interval = setInterval(() => {
            dispatch({ type: 'TICK' });
        }, 1000);
        } else if (!state.isRunning && interval !== null) {
        clearInterval(interval);
        }

        return () => {
        if (interval) clearInterval(interval);
        };
    }, [state.isRunning]);

    const start = useCallback(() => dispatch({ type: 'START' }), []);
    const pause = useCallback(() => dispatch({ type: 'PAUSE' }), []);
    const reset = useCallback(() => dispatch({ type: 'RESET' }), []);

    return {
        time: state.time,
        isRunning: state.isRunning,
        start,
        pause,
        reset,
    };
}
