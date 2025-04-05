import { createSlice } from '@reduxjs/toolkit';

// Correct key names and JSON parsing
const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
    },
    userLogout: (state) => {
      state.user = null;
      state.isAuthenticated = false;

      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('isAuthenticated', JSON.stringify(state.isAuthenticated));
    },
  },
});

// Correct named exports
export const { userLogin, userLogout } = authSlice.actions;

export default authSlice.reducer;
