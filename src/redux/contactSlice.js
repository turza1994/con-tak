import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../config/db';

export const getContacts = createAsyncThunk('contacts/getContacts', async () => {
    const contacts = getContactsFromDB()
    return contacts;
});

const addContactToDB = async (name, email, number)=>{
    try {
        // Add the new friend!
        const id = await db.contacts.add({
          name,
          email,
          number
        });

        console.log(`Friend ${name} successfully added. Got id ${id}`)

      } catch (error) {
        console.log(`Failed to add ${name}: ${error}`)
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
        addContact: (state, action)=>{
            const {name, email, number} = action.payload
            addContactToDB(name, email, number)
            state.contacts.push(action.payload)
        },
    },
    extraReducers: {
        [getContacts.pending]: () => {
            console.log('Pending');
        },
        [getContacts.fulfilled]: (state, { payload }) => {
            console.log('Fetched Successfully!');
            return { ...state, contacts: payload, filteredContacts: payload };
        },
        [getContacts.rejected]: () => {
            console.log('Rejected!');
        },
    }
});

export const { addContact } = contactSlice.actions;
export default contactSlice.reducer;
