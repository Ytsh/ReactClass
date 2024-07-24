import { useState } from "react";
export default function Counter({count,increment,decrement}){
    
    return (
        <>
        <button onClick={decrement}>
            -
        </button>
            {count}
        <button onClick={increment}>
            +
        </button>
        </>
    )
}
