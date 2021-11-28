import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ContactPageHeader from '../../components/ContactPageHeader/ContactPageHeader';
import SingleContact from '../../components/SingleContact/SingleContact';
import { Scrollbars } from 'react-custom-scrollbars';
import '../../index.css';

const ContactPage = () => {
    const contacts = useSelector((state) => state.contacts.contacts)
    const [filteredContacts, setFilteredContacts] = useState([...contacts])
    let alphabets={}

    useEffect(()=>{
        setFilteredContacts([...contacts])
    }, [contacts])

    const renderContactWithNameGroup = (cv)=>{
        alphabets[cv.name[0]] = true

        return <div>
                    <div className="w-100 text-center mb-1 text-black-50 text-uppercase lh-1"><small>{cv.name[0]}</small></div>
                    <SingleContact key={`${cv.id}ng`} contactInfo={cv} />
               </div>
    }

    const renderSingleContact = (cv)=>{
        return <SingleContact key={`${cv.id}si`} contactInfo={cv} />
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
            
            <Scrollbars style={{ width: '100%', height: '100vh' }}>
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
            </Scrollbars>
        </div>
    );
};

export default ContactPage;