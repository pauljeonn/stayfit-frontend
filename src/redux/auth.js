import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/login', async (user) => {
	const res = await axios.post('/auth/login', user);
	return res.data;
});

export const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		pending: false,
		error: false,
	},
	reducers: {
		logout: (state) => {
			state.user = null;
		},
	},
	extraReducers: {
		[login.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[login.fulfilled]: (state, action) => {
			state.pending = false;
			state.user = action.payload;
		},
		[login.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
