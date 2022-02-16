import { createSlice } from '@reduxjs/toolkit';

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState: [],
	reducers: {
		addExercise: (state, action) => {
			state.push(action.payload);
		},
	},
});

export const { addExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
