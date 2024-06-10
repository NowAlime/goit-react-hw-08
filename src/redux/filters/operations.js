
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchFilterOptions = createAsyncThunk(
  'filters/fetchFilterOptions',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/filter-options');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

