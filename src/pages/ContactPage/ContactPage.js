import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';

const ContactPage = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const contacts = useSelector((state) => state.contacts.contacts)
    console.log(contacts);

    const handleSubmit = async ()=>{
        dispatch(addContact({name, email, number}))
    }

    return (
        <div>
            <input type="text" name="name" onBlur={(e)=>setName(e.target.value)} />
            <input type="text" name="email" onBlur={(e)=>setEmail(e.target.value)} />
            <input type="number" name="number" onBlur={(e)=>setNumber(e.target.value)} />
            <button onClick={handleSubmit}>click</button>
        </div>
    );
};

export default ContactPage;