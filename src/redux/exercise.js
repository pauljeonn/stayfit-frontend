import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk (try & catch 로직이 자동으로 포함되어 있다)
export const getExercises = createAsyncThunk(
	'exercise/getExercises',
	async () => {
		const res = await axios.get('exercises');
		console.log(res);
		return res.data;
	}
);

export const addExercise = createAsyncThunk(
	'exercise/addExercise',
	async (newExercise) => {
		const res = await axios.post('exercises', newExercise);
		return res.data;
	}
);

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
			// createSlice에는 immer가 이미 적용되어있어서 push 사용 가능
			state.exercises.push(action.payload);
		},
		addError: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
	extraReducers: {
		[getExercises.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[getExercises.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = action.payload;
		},
		[getExercises.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
		[addExercise.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[addExercise.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises.push(action.payload);
		},
		[addExercise.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
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
