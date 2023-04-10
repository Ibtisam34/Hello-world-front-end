import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchMessage = createAsyncThunk('message/fetchMessage', async () => {
  const response = await fetch('http://localhost:3000/api/v1/messages/random');
  const data = await response.json();
  return data.greeting;
});
const messageSlice = createSlice({
  name: 'message',
  initialState: { message: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled,
      (state, action) => ({ ...state, message: action.payload }
      ));
  },
});
export const selectMessage = (state) => state.message.message;
export default messageSlice.reducer;
