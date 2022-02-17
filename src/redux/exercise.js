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
		addStart: (state) => {
			state.pending = true;
		},
		addSuccess: (state, action) => {
			state.pending = false;
			// createSlice에는 immer가 이미 적용되어있어서
			state.exercises.push(action.payload);
			// state.exercises = [...state.exercises, action.payload];
			console.log('add success: ', state.exercises);
		},
		addError: (state) => {
			state.pending = false;
			state.error = true;
		},
		// addExercise: (state, action) => {
		// 	state.push(action.payload);
		// },
	},
});

export const {
	getStart,
	getSuccess,
	getError,
	addStart,
	addSuccess,
	addError,
} = exerciseSlice.actions;
export default exerciseSlice.reducer;
