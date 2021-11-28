import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactSlice';
import Modal from 'react-modal';

const customStyles = {
    content: {
      width: '50%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('body');

const AddContactForm = () => {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const handleSubmit = async ()=>{
        dispatch(addContact({firstName, lastName, email, number}))
        window.location.reload(true)
    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="">
            <button className="btn btn-info btn-sm border-0 rounded-3 text-white me-2 py-1" onClick={openModal}><small>Add Contacts</small></button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
    
            <div className="w-100 d-flex justify-content-end">
                <i className="fas fa-times text-black-50 ms-auto fs-3" onClick={closeModal}></i>
            </div>
            <p className="text-center text-secondary">Contact Info</p>
            <form className="px-5">
                <div className="mb-3 row">
                    <label htmlFor="staticFirstName" className="col-sm-2 col-form-label">Name:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control bg-light border-0 text-black-50" id="staticFirstName" 
                        name="firstName" placeholder="First Name" onBlur={(e)=>setFirstName(e.target.value)} />
                    </div>
                </div>

                <div className="col-sm-10 ms-auto">
                        <input type="text" className="form-control bg-light border-0 text-black-50" id="staticName" 
                        name="lastName" placeholder="Surname" onBlur={(e)=>setLastName(e.target.value)} />
                </div>
                <br/>
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control bg-light border-0 text-black-50" id="staticEmail" 
                        name="email" placeholder="e.g. youremail@gmail.com" onBlur={(e)=>setEmail(e.target.value)} />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="staticNumber" className="col-sm-2 col-form-label">Contact Number:</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control bg-light border-0 text-black-50" id="staticNumber" 
                        name="number" placeholder="e.g. +8801828188189" onBlur={(e)=>setNumber(e.target.value)} />
                    </div>
                </div>

                <div className="w-100 d-flex justify-content-end">
                    <button className="btn btn-info btn-sm border-0 rounded-3 text-white me-2 py-1" onClick={handleSubmit}><small>Save Contact</small></button>
                </div>
            </form>
          </Modal>
        </div>
      );

};

export default AddContactForm;