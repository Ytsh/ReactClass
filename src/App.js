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
    function incrementPant(){
      setPantCount(pantCount+1);
    }
    function decrementPant(){
        if(pantCount>0){
          setPantCount(pantCount-1);
        }
    }
    function incrementTshirt(){
      setTshirtCount(tshirtCount+1);
    }
    function decrementTshirt(){
        if(tshirtCount>0){
          setTshirtCount(tshirtCount-1);
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

    <Counter count={pantCount} increment={incrementPant} decrement={decrementPant} /> {/* Pant */}
    <br/>
    <Counter count={tshirtCount} increment={incrementTshirt} decrement={decrementTshirt}  /> {/* Tshirt */}
    </>
  );
}

export default App;
