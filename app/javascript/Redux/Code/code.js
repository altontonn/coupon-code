import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// const DISPLAYCODES = 'coupon-code/src/REDUX/DISPLAYCODES'

const initialState = {
  data: [],
}

const baseURL = `${window.location.origin}/api/v1`;
export const fetchCodeData = createAsyncThunk(
  async (thunkAPI) => {
    try {
      const response = await axios.get(`${baseURL}/codes`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWitValue(e.response.data)
    }
  }
)