import { createAsyncThunk } from "@reduxjs/toolkit";
const DISPLAYCODES = 'coupon-code/src/REDUX/DISPLAYCODES'

const initialState = {
  data: [],
}

const baseURL = `${window.location.origin}/api/v1`;