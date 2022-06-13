import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://reqres.in/api/users";
const singleUrl = "https://reqres.in/api/users/";

const initialState = {
  users: [],
  singleUser: {},
  isLoading: true,
  single_user_loading: false,
};

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const resp = await axios(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Somthing went wrong.");
    }
  }
);

export const getSingleUser = createAsyncThunk(
  "users/getSingleUser",
  async (id, thunkAPI) => {
    try {
      const response = await axios(`${singleUrl}${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Cannot get User");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsers.fulfilled]: (state, action) => {
      const { total_pages, data } = action.payload;
      state.isLoading = false;
      state.users = data;
      state.pages = total_pages;
    },
    [getUsers.rejected]: (state, action) => {
      state.isLoading = false;
    },
    //
    [getSingleUser.pending]: (state) => {
      state.single_user_loading = true;
    },
    [getSingleUser.fulfilled]: (state, action) => {
      state.single_user_loading = false;
      state.singleUser = action.payload.data;
    },
    [getSingleUser.rejected]: (state) => {
      state.single_user_loading = false;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
