import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk (try & catch 로직이 자동으로 포함되어 있다)
export const getExercises = createAsyncThunk(
	'exercise/getExercises',
	async () => {
		const res = await axios.get('http://localhost:3000/exercises');
		return res.data;
	}
);

export const addExercise = createAsyncThunk(
	'exercise/addExercise',
	async (newExercise) => {
		const res = await axios.post(
			'http://localhost:3000/exercises',
			newExercise
		);
		return res.data;
	}
);

export const deleteExercise = createAsyncThunk(
	'exercise/deleteExercise',
	async (exerciseId) => {
		await axios.delete(`http://localhost:3000/exercises/${exerciseId}`);
		// 운동 삭제 후 변경된 exercises 불러오기
		const res = await axios.get('http://localhost:3000/exercises');
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
	reducers: {},
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
		[deleteExercise.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[deleteExercise.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = action.payload;
		},
		[deleteExercise.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export const {} = exerciseSlice.actions;
export default exerciseSlice.reducer;
