import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../config/db';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    const contacts = getContactsFromDB()
    return contacts;
});

export const addContact = createAsyncThunk('contacts/addContact', async (contactInfo) => {
    console.log(contactInfo);
    const newContact = addContactToDB(contactInfo)
    return newContact;
});

const addContactToDB = async ({firstName, lastName, email, number})=>{
    try {
        // Add the new friend!
        const id = await db.contacts.add({
          name: `${firstName} ${lastName}`,
          email,
          number
        });

        console.log(`Friend ${firstName} successfully added. Got id ${id}`)
        return {id, name: `${firstName} ${lastName}`, email, number}

      } catch (error) {
        console.log(`Failed to add ${firstName}: ${error}`)
      }
}

export const getContactsFromDB = async ()=>{
    let contacts = await db.contacts.toArray()
    contacts = contacts.sort((a, b) => a.name<b.name && -1)
    return contacts;
}

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        // addContact: (state, action)=>{
        //     const {firstName, lastName, email, number} = action.payload
        //     addContactToDB(firstName, lastName, email, number)
        //     state.contacts.push(action.payload)
        // },
    },
    extraReducers: {
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
