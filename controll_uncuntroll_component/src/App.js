import React, { useState } from 'react'
import './App.css';

function App() {

  const [Data,setData] = useState("")

  return (
    <div className="App">
      <h1>Controll Component</h1>
      <h1>Name is : {Data}</h1>
      <input type='text' value={Data} onChange={(e)=>setData(e.target.value)}></input>
    </div>
  );
}

export default App;
