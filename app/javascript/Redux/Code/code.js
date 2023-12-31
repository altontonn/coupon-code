import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  codes: [],
  redeemedCodes: [],
  status: 'idle',
};

const baseURL = `${window.location.origin}/api/v1`;

export const fetchCodeData = createAsyncThunk("codes/fetchCodeData", async () => {
  try {
    const response = await axios.get(`${baseURL}/code`);
    return response.data; // Ensure this line correctly returns the data
  } catch (error) {
    throw error; // Let the error propagate
  }
});

const codeSlice = createSlice({
  name: "codes",
  initialState,
  reducers: {
    addRedeemedCode: (state, action) => {
      state.redeemedCodes.push(action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeData.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchCodeData.fulfilled, (state, action) => ({
        ...state,
        status: "fulfilled",
        codes: action.payload,
      }))
      .addCase(fetchCodeData.rejected, (state) => ({
        ...state,
        status: "rejected",
      }));
  },
});

export const { addRedeemedCode } = codeSlice.actions;
export default codeSlice.reducer