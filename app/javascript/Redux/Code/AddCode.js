import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  status: null
}

const baseUrl = `${window.location.origin}/api/v1`;
const createCode = createAsyncThunk("code/create", async(payload) => {
  try {
    const response = await axios.post(baseUrl, {code: payload});
    return response.data;
  } catch (error) {
    throw error; 
  }
})