import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Ptag from './ChildComponent';
import Counter from './Counter'
import Lists from './Lists'



let val = "somethung";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

   

    {/* <Lists/> */}
    <App />
    {/* <Ptag message='This is a message for child' />
    <Ptag message='hello there' />
    <Ptag message='ohhh hello' />
    <Ptag message='k cha bro' />
    <Ptag message='a message from index' /> */}

    {/* <MyButton/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// multiple small as possible components banaincha hai 
