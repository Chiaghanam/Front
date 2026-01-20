import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
// import { PRODUCTS_FAIL, PRODUCTS_REQUEST, PRODUCTS_SUCCESS } from '../Constants/ProductConstants';  

export const fetchproduct = createAsyncThunk('fetchproduct', async() =>{
    const response = await axios.get('http://127.0.0.1:8000/home/')
    return response.data;

}  )

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    isloading: false,
    // products: [],
    error: null,
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchproduct.pending, (state)=>{
        state.isloading = true;
        state.data = [];
    })
    builder.addCase(fetchproduct.fulfilled, (state, action)=>{
      state.isloading = false;
      state.data = action.payload;
      // action.type = String;
    })
    builder.addCase(fetchproduct.rejected, (state, action)=>{
      state.isloading = false;
      state.error = action.error.message;
      // action.type = String;
    })
  }
});
export default productSlice.reducer;