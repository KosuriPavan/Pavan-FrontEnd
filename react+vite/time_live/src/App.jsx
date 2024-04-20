
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time,setTime]=useState(new Date());
  useEffect(()=>{
    const intervalId= setInterval(()=>{setTime(new Date())},1000)
    return (()=>{
      clearInterval(intervalId);
    })
  },[])

  return <>
    <p>The date is {time.toLocaleDateString()} and the time is {time.toLocaleTimeString()}</p>
  </>;
}

export default App;
