import axios from 'axios';
import PROXY from '../Constants/api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchUserInfo = createAsyncThunk(
  'login/fetchUserInfo',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post(PROXY + '/api/token/', { email, password });
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue('Login failed');
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
    error: null,
    loading: false,
  },
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
        localStorage.setItem('userInfo', JSON.stringify(action.payload));
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.userInfo = null;
        state.error = action.payload || action.error.message;
        localStorage.removeItem('userInfo');
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;