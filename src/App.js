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

function App() {
  
    
  let val = "this is a message to child";

  //login bhayo re, either admin or user,.. admin le chai button dekhos, user le chai this is a message to child dekhos re

  let context;
  let isAdmin = false //this is a user
  context = isAdmin ? <MyButton/> : <Ptag message={val}/> 
  const [pantCount, setPantCount] = useState('');
  const [shirtCount, setShirtCount] = useState('')

  function getPantCount(pantCount){
    setPantCount(pantCount);
    console.log(pantCount);
  }
  function getShirtCount (shirtCount){
    setShirtCount(shirtCount);
    console.log(shirtCount);
  }
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
    {/* <Ptag message={val} /> */}
    <br/>
    Pant : <Counter getCountValue = {getPantCount}  /> 
    <br/>
    Shirt: <Counter  getCountValue = {getShirtCount}   /> 
    <br/>
    </>
  );
}

export default App;
