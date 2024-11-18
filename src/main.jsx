import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Faiza(){//function can be created here
  return(
    <h1>Hello there!</h1>
  )
}
const ObjectFun =(
  <a href='www.google.com' target='_blank'>Visit google</a>
)//Object creation
const reactElement={//however can not define object like this 
  type:'a',  //coz structure is already written over there
  props:{
    href:"https//www.google.com",
    target:"_blank"
  },
  children:"Click me to visit google"
}
//creating new Element in React
const newElement=React.createElement(
  'a',
  {href:"www.google.com",target:"_blank"},
  'click me to visit Google:)'
)
ReactDOM.createRoot(document.getElementById('root')).render(
  //  ObjectFun   //we write object like this
  // newElement      //we write object like this second example
  <React.StrictMode>
    <App />
    <Faiza/>{/*or can be Faiza() */}
    
  </React.StrictMode>,
  
)
