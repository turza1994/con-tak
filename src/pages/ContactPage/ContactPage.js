import React from 'react';
import { useSelector } from 'react-redux';
import ContactPageHeader from '../../components/ContactPageHeader/ContactPageHeader';
import SingleContact from '../../components/SingleContact/SingleContact';
import '../../index.css';

const ContactPage = () => {
    const contacts = useSelector((state) => state.contacts.contacts)
    console.log(contacts);

    const alphabets={}
    console.log(alphabets);

    const renderContactWithNameGroup = (cv)=>{
        alphabets[cv.name[0]] = true

        return <div>
                    <div className="w-100 text-center mb-1 text-black-50 text-uppercase"><small>{cv.name[0]}</small></div>
                    <SingleContact key={cv.id} contactInfo={cv} />
               </div>
    }
    const renderSingleContact = (cv)=>{
        return <SingleContact key={cv.id} contactInfo={cv} />
    }

    return (
        <div className="m-5 w-75 mx-auto rounded-3 bg-light-grey shadow">
            <ContactPageHeader />
            <div className="px-3">
                {
                    contacts.map(cv => {
                        return !alphabets[cv.name[0]] ? 
                        renderContactWithNameGroup(cv) 
                        : 
                        renderSingleContact(cv)
                    })
                }
            </div>
        </div>
    );
};

export default ContactPage;