import React, {useState} from "react";
import useInterval from "./useInterval";
import "./clock.css"


function AutoRefreshComponent() {
    const [data, setData] = useState(0);

    useInterval(() => {
        setData(prev => prev + 1); 
    }, 1000); 

    return <p className="clock-refresh">Seconds spent on this page: {data}</p>;
}

export default AutoRefreshComponent;