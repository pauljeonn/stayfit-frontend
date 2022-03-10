import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Thunk (try & catch 로직이 자동으로 포함되어 있음)
export const getExercises = createAsyncThunk(
	'exercise/getExercises',
	async (userId) => {
		const res = await axios.get(`/exercises/${userId}`);
		return res.data;
	}
);

export const addExercise = createAsyncThunk(
	'exercise/addExercise',
	async (newExercise) => {
		const res = await axios.post('/exercises', newExercise);
		return res.data;
	}
);

export const editExercise = createAsyncThunk(
	'exercise/editExercise',
	async (requestData) => {
		const res = await axios.put(`/exercises/${requestData[0]}`, requestData[1]);
		return res.data;
	}
);

export const deleteExercise = createAsyncThunk(
	'exercise/deleteExercise',
	async (exerciseId) => {
		await axios.delete(`/exercises/${exerciseId}`);
		return exerciseId;
	}
);

export const addDone = createAsyncThunk(
	'exercise/addDone',
	async (requestData) => {
		const res = await axios.put(
			`/exercises/${requestData[0]}/done`,
			requestData[1]
		);
		return res.data;
	}
);

export const removeDone = createAsyncThunk(
	'exercise/removeDone',
	async (requestData) => {
		const res = await axios.put(
			`/exercises/${requestData[0]}/undo`,
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
	reducers: {
		clearExercise: (state) => {
			state.exercises = null;
		},
	},
	// immer 지원
	extraReducers: {
		[getExercises.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[getExercises.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = action.payload;
			state.error = false;
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
		[addDone.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[addDone.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = state.exercises.map((exercise) =>
				exercise._id === action.payload._id ? action.payload : exercise
			);
		},
		[addDone.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
		[removeDone.pending]: (state) => {
			state.pending = true;
			state.error = false;
		},
		[removeDone.fulfilled]: (state, action) => {
			state.pending = false;
			state.exercises = state.exercises.map((exercise) =>
				exercise._id === action.payload._id ? action.payload : exercise
			);
		},
		[removeDone.rejected]: (state) => {
			state.pending = false;
			state.error = true;
		},
	},
});

export const { clearExercise } = exerciseSlice.actions;
export default exerciseSlice.reducer;
