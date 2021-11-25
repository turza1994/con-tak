import { useState } from "react";
import { db } from "./config/db";

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("")
  console.log(name, email, number);

  const handleSubmit = async ()=>{
    try {

      // Add the new friend!
      const id = await db.contacts.add({
        name,
        email,
        number
      });

      {console.log(`Friend ${name} successfully added. Got id ${id}`);}
      setName("");
      setEmail("");
      setNumber("")
    } catch (error) {
      {console.log(`Failed to add ${name}: ${error}`);}
    }
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
