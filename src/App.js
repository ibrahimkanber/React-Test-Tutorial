import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [state,setState]=useState("red")

  const newButtonColor=state==="red" ? "blue":"red" ;




  return (
    <div>
      <button style={{backgroundColor:state}} onClick={()=>setState(newButtonColor)}>Change to {newButtonColor}</button>
    </div>
  );
}

export default App;
