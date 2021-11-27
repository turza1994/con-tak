import React from 'react';
import { useSelector } from 'react-redux';
import ContactPageHeader from '../../components/ContactPageHeader/ContactPageHeader';
import '../../index.css';

const ContactPage = () => {
    const contacts = useSelector((state) => state.contacts.contacts)
    console.log(contacts);

    return (
        <div className="m-5 w-75 mx-auto rounded bg-light-grey">
            <ContactPageHeader />
        </div>
    );
};

export default ContactPage;