import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  abilities: {},
  status: 'idle',
  error: null
}

export const getAuthorzation = createAsyncThunk('coupon-code/authorization', async() =>{
  try {
    const response = await axios.get('/api/v1/abilities');
    return response.data;
  } catch (error) {
    throw error;
  }
})