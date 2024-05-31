import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCounter] = useState(10)
  //let count = 10;
  const addValue = () => {    
    setCounter(count+1)
    //count =count+1
    console.log("value added",count);
  }
  const removeValue = () =>{
    setCounter(count-1)
    //count = count-1
    console.log("value remved ", count);

  }

  return (
    <>
      <h1>Sakshi gupta</h1>
      <h2>Counter value :{count}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App
