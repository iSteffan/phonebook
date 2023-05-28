import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const editContact = createAsyncThunk(
//   'contacts/editContact',
//   async (contactId, contact) => {
//     try {
//       console.log('contactId', contactId);
//       console.log('contact', contact);
//       const { data } = await axios.patch(`/contacts/${contactId}`, contact);
//       return data;
//     } catch (error) {
//       console.log(error.message);
//     }
//   }
// );
export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      console.log('data', data);
      // console.log('contact', contact);
      const response = await axios.patch(`/contacts/${data.id}`, {
        name: data.name,
        number: data.number,
      });
      return response.data;
    } catch (error) {
      console.log(error.message);
    }
  }
);
// export const redactContatc = createAsyncThunk(
//   'contacts/redactContatc',
//   async (data, { rejectWithValue }) => {
//     try {
//       const response = await axios.patch(`/contacts/${data.id}`, {
//         name: data.name,
//         number: data.number,
//       });
//       return response.data;
//     } catch (e) {
//       return rejectWithValue(e.message);
//     }
//   }
// );
