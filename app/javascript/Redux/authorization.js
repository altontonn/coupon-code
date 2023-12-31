import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  abilities: {},
  status: 'idle',
  error: null
}

const baseUrl = `${window.location.origin}/api/v1`;

export const getAuthorzation = createAsyncThunk('coupon-code/authorization', async() =>{
  try {
    const response = await axios.get(`${baseUrl}/abilities`);
    return response.data;
  } catch (error) {
    throw error;
  }
})

const authorizationSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAuthorzation.pending, (state) => {
      state.status = "loading";
    })
    .addCase(getAuthorzation.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.abilities = action.payload;
    })
    .addCase(getAuthorzation.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    })
  },
})
export default authorizationSlice.reducer;