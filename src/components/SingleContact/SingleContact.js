import React from 'react';
import '../../index.css';

const SingleContact = (props) => {
    const {name, email, number} = props.contactInfo

    return (
        <div className="bg-white mb-1 p-2 d-flex align-items-center rounded-3">
            <label className="bg-secondary rounded-circle text-center text-white fs-5 me-2" style={{width:'30px'}}>
                {name[0]}
            </label>
            <div className="d-flex flex-column justify-content-center align-items-start">
                <label className="text-secondary lh-1">{name}</label>
                <label className="text-black-50 fw-light lh-1"><small>{number}</small></label>
            </div>
        </div>
    );
};

export default SingleContact;