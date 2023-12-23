import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const login = "/signin";

export const loginUser = createAsyncThunk(
  "user/login",
  async({email, password}) => {
    const response = await fetch(login, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: {
          email,
          password
        },
      }),
    });
    const data = await response.json();
    if(response.status === 201) {
      return data;
    }
  }
)

const signup = "/signup";

const userFromLocalStorage = JSON.parse(localStorage.getItem("user")) || {
  user_id: 0,
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  pending: "",
  success: "",
  rejected: "",
  errMessage: "",
  role: ""
}

const initialState = {
  user: userFromLocalStorage,
}

export const registerUser = createAsyncThunk(
  "user/register",
  async({name, email, password, password_confirmation}) => {
    const response = await fetch(signup, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          name,
          email,
          password,
          password_confirmation
        },
      }),
    });
    const data = await response.json();
    if(response.status === 201) {
      return data;
    }
  }
)

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      state.user = initialState.user;
    },
  },
})