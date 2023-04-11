import { configureStore } from '@reduxjs/toolkit';
import randomMessageSlice from './randomMessageSlice';

const store = configureStore({
  reducer: {
    randomMessage: randomMessageSlice.reducer,
  },
});

export default store;
