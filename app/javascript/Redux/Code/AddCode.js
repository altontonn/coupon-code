import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null
}

const baseUrl = `${window.location.origin}/api/v1`;

export const createCode = createAsyncThunk("code/create", async(payload) => {
  try {
    const response = await axios.post(`${baseUrl}/code`, {code: payload});
    return response.data;
  } catch (error) {
    console.error('Error creating code:', error);
    throw error; 
  }
})

const addCodeSlice = createSlice({
  name: 'codes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createCode.pending, (state) => ({
      ...state,
      status: 'pending'
    }))
    .addCase(createCode.fulfilled, (state) => ({
      ...state,
      status: 'success'
    }))
    .addCase(createCode.rejected, (state) => ({
      ...state,
      status: 'rejected'
    }))
  }
})
export default addCodeSlice.reducer