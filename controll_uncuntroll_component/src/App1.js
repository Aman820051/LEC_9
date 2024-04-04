import React, { useRef } from 'react'
import './App.css';

function App1() {

  inputRef1 = useRef(null)
  inputRef2 = useRef(null)

  function submit(e)
  {
    e.preventDefault();
    console.warn(inputRef1.current.value);
    console.warn(inputRef2.current.value);
    let a = document.getElementById('name').value;
    console.warn(a);

  }

  return (
    <div className="App">
        <h1>UnControll Component</h1>
        <div>
            <form onSubmit={submit}>
                <input type='text' ref={inputRef1}></input>
                <br/>
                <br/>
                <input type='text' ref={inputRef2}></input>
                <br/>
                <br/>
                <input type='text' id='name'></input>
                <br/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    </div>
  );
}

export default App1;
