import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const DISPLAYCODES = 'coupon-code/src/REDUX/DISPLAYCODES'

const initialState = {
  codes: [],
  status: null,
};

const baseURL = `${window.location.origin}/api/v1`;
export const fetchCodeData = createAsyncThunk(async (thunkAPI) => {
  try {
    const response = await axios.get(`${baseURL}/code`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWitValue(e.response.data);
  }
});

const codeSlice = createSlice({
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCodeData.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      
  },
});
