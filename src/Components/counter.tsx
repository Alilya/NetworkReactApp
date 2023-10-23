import React, { useState } from "react";
import style from "./counter.module.scss"

export const Counter =()=>{
    const [count, setCount] =useState(0);

    const increment=()=>{
        setCount(count+1)
    }
    return <div>
        <h1>{count}</h1>
        <button className={style.button} onClick={increment}>increment</button>
    </div>;
}
