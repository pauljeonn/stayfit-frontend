import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState: {
		exercises: [],
		pending: false,
		error: false,
	},
	reducers: {
		getStart: (state) => {
			state.pending = true;
		},
		getSuccess: (state, action) => {
			state.pending = false;
			state.exercises = action.payload;
		},
		getError: (state) => {
			state.pending = false;
			state.error = true;
		},
		addExercise: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { getStart, getSuccess, getError, addExercise } =
	exerciseSlice.actions;
export default exerciseSlice.reducer;
