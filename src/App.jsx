import React, { useState } from 'react';
import "./App.css"
import School from './components/School';
import Navbar from './components/Navbar';
// import School from "./components/School"

function App () {
 const [name, setName] = useState("Alliance Boys")
 const [age, setAge] = useState(0)
 const add =() => {
  setAge(age + 1)
 }
  return (
    <div>
      <Navbar />
      <School boys={name} age={age} func={add}/>
    </div>
  );
}

export default App;
