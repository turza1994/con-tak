import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addContactToDB, getContactsFromDB } from '../db/db';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    const contacts = getContactsFromDB()
    return contacts;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactInfo) => {
    console.log(contactInfo);
    const newContact = addContactToDB(contactInfo)
    return newContact;
});

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {},
    extraReducers: {
        //getting all contacts
        [getContacts.pending]: () => {
            console.log('Pending');
        },
        [getContacts.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully!');
            return { ...state, contacts: payload };
        },
        [getContacts.rejected]: () => {
            console.log('Rejected!');
        },

        //adding a contact
        [addContact.pending]: () => {
            console.log('Pending');
        },
        [addContact.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully!');
            state.contacts.push(payload)
            state.contacts.sort((a, b) => a.name<b.name && -1)
        },
        [addContact.rejected]: () => {
            console.log('Rejected!');
        },
    }
});

export default contactSlice.reducer;
