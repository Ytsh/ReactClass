import { useState } from "react";
export default function Counter({getCountValue}){
    const [count,setCount] = useState(0);
    function increment(){
      setCount(count+1);
      handleCountChage(count+1);
    }
    function decrement(){
        if(count>0){
          setCount(count-1);
          handleCountChage(count-1);
        }
        
    }
    function handleCountChage(val){
        getCountValue(val);
    }
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
