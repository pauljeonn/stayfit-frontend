import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk (try & catch 로직이 자동으로 포함되어 있음)
export const getExercises = createAsyncThunk(
	'exercise/getExercises',
	async (userId) => {
		const res = await axios.get(`http://localhost:3000/exercises/${userId}`);
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

export const editExercise = createAsyncThunk(
	'exercise/editExercise',
	async (requestData) => {
		const res = await axios.put(
			`http://localhost:3000/exercises/${requestData[0]}`,
			requestData[1]
		);
		return res.data;
	}
);

export const deleteExercise = createAsyncThunk(
	'exercise/deleteExercise',
	async (exerciseId) => {
		await axios.delete(`http://localhost:3000/exercises/${exerciseId}`);
		return exerciseId;
	}
);

export const toggleDone = createAsyncThunk(
	'exercise/toggleDone',
	async (requestData) => {
		const res = await axios.put(
			`http://localhost:3000/exercises/${requestData[0]}/done`,
			requestData[1]
		);
		return res.data;
	}
);

export const exerciseSlice = createSlice({
	name: 'exercise',
	initialState: {
		exercises: null,
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
		[editExercise.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[editExercise.fulfilled]: (state, action) => {
			state.pending = false;
			// 수정된 운동만 변경하기
			state.exercises = state.exercises.map((exercise) =>
				exercise._id === action.payload._id ? action.payload : exercise
			);
		},
		[editExercise.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
		[deleteExercise.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[deleteExercise.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = state.exercises.filter(
				(exercise) => exercise._id !== action.payload
			);
		},
		[deleteExercise.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
		[toggleDone.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[toggleDone.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = state.exercises.map((exercise) =>
				exercise._id === action.payload._id ? action.payload : exercise
			);
		},
		[toggleDone.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export const {} = exerciseSlice.actions;
export default exerciseSlice.reducer;
