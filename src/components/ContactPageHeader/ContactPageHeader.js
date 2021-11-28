import React from 'react';
import ReactDOMServer from "react-dom/server";
import { useSelector } from 'react-redux';
import jsPDF from "jspdf";
import '../../index.css';
import AddContactForm from '../AddContactForm/AddContactForm';
import SingleContact from '../SingleContact/SingleContact';

const doc = new jsPDF();

const ContactPageHeader = ({onSearchChange}) => {
    const contacts = useSelector((state) => state.contacts.contacts)

    //Function for downloading pdf
    const save = () => {
        doc.html(ReactDOMServer.renderToStaticMarkup(
        <div>
            {
                contacts.map(cv => <SingleContact key={cv.id} contactInfo={cv} />)
            }
        </div>), {
          callback: () => {
            doc.save("myDocument.pdf");
          }
        });
    };

    return (
        <div className="bg-little-grey w-100 px-2 py-3 rounded-top d-flex flex-xs-column flex-sm-column flex-md-row flex-row justify-content-around align-items-center mb-1" >

            {/* Search Bar */}
            <div className="input-group w-75">
                <input type="text" className="form-control bg-light-grey border-0" placeholder="Search contacts" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={onSearchChange}/>

                <span className="input-group-text bg-light-grey border-0" id="basic-addon2"><i className="fas fa-search text-black-50"></i></span>
            </div>
            {/* Search icon */}

            <div className="buttons d-flex">
                {/* Add Contact Button */}
                <AddContactForm />

                {/* Export Button */}
                <button onClick={save} className="btn btn-light btn-sm border-0 rounded-3 bg-grey text-black-50 fw-light lead py-1"><small>Export</small></button>
            </div>
        </div>
    );
};

export default ContactPageHeader;