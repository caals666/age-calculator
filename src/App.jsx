import {useState} from 'react'
import './App.css'

function App() {
  let [age,setAge]=useState(0);
  let bday=()=>{
    let date=new Date(document.getElementById("dateSelect").value);
    let now=new Date();
    setAge(now.getFullYear()-date.getFullYear());
    let month=now.getMonth()-date.getMonth();
    let today=now.getDay()-date.getDay();
    if(month<0||month==0&&today<0){
      setAge(age=>age-1);
    }
    const h3=document.getElementById("ageEl");
    h3.textContent=`You are ${age} old`
  }
  return (
    <>
      <h1>Age Calculator</h1>
      <h3>Enter your birth date:</h3>
      <div id="dateDiv">
        <input type="date" id="dateSelect"></input>{" "}
        <button onClick={bday}>Calculate</button>
        <h3 id="ageEl">{age>0?`You are ${age} years old`:""}</h3>
      </div>
    </>
  )
}

export default App
