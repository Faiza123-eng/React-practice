import Chai from "./Chai.jsx";
import {useState} from 'react';

function App() {
  //USE STATE
  // let counter=15;  //instead of this we will give value
  let[counter,setcounter]=useState(15);//using usestate to propagate changes in ui
  const add=()=>{
     console.log("Value Added", Math.random()*6);
    // counter=counter+1;
    setcounter(counter+1)//instead we will update value like this
   }
//for removing value
let[count,setcount]=useState(15);
   const remove=()=>{
    console.log("Value remove", Math.random()*6);
   // counter=counter+1;
   setcount(count-1)//instead we will update value like this
  }
  const name="Faiza";
  return (
    <>
    <Chai/>
    <h1>{name}</h1>
    <button onClick={add}>Added {counter}</button>
    <br/>
    <p onClick={add}>Add again{counter}</p>
    <br/>
    <button onClick={remove}>Removed {count}</button>
    </>
  );
}

export default App
