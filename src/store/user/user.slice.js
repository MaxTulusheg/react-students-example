/* eslint no-param-reassign: 0 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { user } from '../../mock/general';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

export const retrieveUserInfo = createAsyncThunk(
  'user/retrieveUserInfo',
  async (args, thunkAPI) => {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await new Promise((resolve, reject) => {
        setTimeout(() => resolve(user), 2000);
      });

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: 'Cannot get user info',
      });
    }
  },
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [retrieveUserInfo.pending]: (state) => {
      state.isLoading = true;
    },
    [retrieveUserInfo.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.user = payload;
    },
    [retrieveUserInfo.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.user = null;
    },
  },
});

export default counterSlice.reducer;
