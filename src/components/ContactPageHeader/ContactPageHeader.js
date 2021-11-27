import React from 'react';
import '../../index.css';

const ContactPageHeader = () => {
    return (
        <div className="bg-little-grey w-100 px-2 py-3 rounded-top d-flex flex-xs-column flex-sm-column flex-md-row flex-row justify-content-around align-items-center mb-1">
            <div className="input-group w-75">
                <input type="text" className="form-control bg-light-grey border-0" placeholder="Search contacts" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text bg-light-grey border-0" id="basic-addon2">@</span>
            </div>

            <div className="buttons d-flex">
                <button className="btn btn-info btn-sm border-0 rounded-3 text-white me-2 py-1"><small>Add Contacts</small></button>
                <button className="btn btn-light btn-sm border-0 rounded-3 bg-grey text-black-50 fw-light lead py-1"><small>Export</small></button>
            </div>
        </div>
    );
};

export default ContactPageHeader;