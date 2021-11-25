import { useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "./config/db";
import { addContact } from "./redux/contactSlice";

function App() {
  const dispatch = useDispatch();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")

  const handleSubmit = async ()=>{
    dispatch(addContact({name, email, number}))
  }

  return (
    <div className="App">
      <input type="text" name="name" onBlur={(e)=>setName(e.target.value)} />
      <input type="text" name="email" onBlur={(e)=>setEmail(e.target.value)} />
      <input type="number" name="number" onBlur={(e)=>setNumber(e.target.value)} />
      <button onClick={handleSubmit}>click</button>
    </div>
  );
}

export default App;
