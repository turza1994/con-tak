import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactPageHeader from '../../components/ContactPageHeader/ContactPageHeader';
import SingleContact from '../../components/SingleContact/SingleContact';
import '../../index.css';

const ContactPage = () => {
    let contacts = useSelector((state) => state.contacts.contacts)
    console.log(contacts);
    let [filteredContacts, setFilteredContacts] = useState([])
    console.log(filteredContacts);

    const alphabets={}
    console.log(alphabets);

    useEffect(()=>{
        setFilteredContacts([...contacts])
    }, [contacts])

    const renderContactWithNameGroup = (cv)=>{
        alphabets[cv.name[0]] = true

        return <div>
                    <div className="w-100 text-center mb-1 text-black-50 text-uppercase lh-1" ><small key={`${cv.id}tu`}>{cv.name[0]}</small></div>
                    <SingleContact key={cv.id} contactInfo={cv} />
               </div>
    }

    const renderSingleContact = (cv)=>{
        return <SingleContact key={cv.id} contactInfo={cv} />
    }

    const onSearchChange = (e)=>{
        let name = e.target.value;
        let filteredContacts = [];
        for(let i=0; i<contacts.length; i++){
            if(contacts[i].name.toLowerCase().includes(name.toLowerCase())){
                filteredContacts.push(contacts[i]);
            }
        }
        setFilteredContacts(filteredContacts)
    }

    return (
        <div className="m-5 w-75 mx-auto rounded-3 bg-light-grey shadow pb-3" style={{borderRadius: '100px'}}>
            <ContactPageHeader onSearchChange={onSearchChange} />
            <div className="px-3">
                {
                    filteredContacts.map(cv => {
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