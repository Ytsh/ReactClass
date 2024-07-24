import logo from './logo.svg';
import './App.css';
import Ptag from './ChildComponent';
import Profile from './Profile';
import Counter from './Counter'
import { useState } from "react";

export function MyButton(){
  return (
    <button className="btn btn-primary" > 
      Click me  
    </button>
  );
}
//supporting code

function App(props) {
  const [pantCount,setPantCount] = useState(0);
  const [tshirtCount,setTshirtCount] = useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        if(count>0){
            setCount(count-1);
        }
    }
  let val = "this is a message to child";

  //login bhayo re, either admin or user,.. admin le chai button dekhos, user le chai this is a message to child dekhos re

  let context;
  let isAdmin = false //this is a user
  context = isAdmin ? <MyButton/> : <Ptag message={val}/> 
  //supporting code
  return (
    <>
    {/* <h1>
      hello 
    </h1> */}
    <div>
      {/* <Ptag message={val}/>
      <MyButton /> */}
      {/* {isAdmin ? <MyButton/> : <Ptag message={val}/> } */}
      {/* {context} */}
    </div>
    {/* < Profile /> */}

    <Counter count={count} increment={increment} decrement={decrement} /> {/* Pant */}
    <br/>
    <Counter count={count} increment={increment} decrement={decrement}  /> {/* Tshirt */}
    </>
  );
}

export default App;
