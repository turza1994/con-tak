import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    contacts: [],
};

const contactSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact: (state, action)=>{
            console.log(action.payload);
        }
    },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
