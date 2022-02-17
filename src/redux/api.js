import axios from 'axios';
import {
	getStart,
	getSuccess,
	getError,
	addStart,
	addSuccess,
	addError,
} from './exercise';

export const getExercises = async (dispatch) => {
	dispatch(getStart());
	try {
		const res = await axios.get('exercises');
		dispatch(getSuccess(res.data));
		console.log(res.data);
	} catch (err) {
		dispatch(getError());
		console.log(err);
	}
};

export const addExercise = async (dispatch, exercise) => {
	dispatch(addStart());
	try {
		const res = await axios.post('exercises', exercise);
		dispatch(addSuccess(res.data));
		console.log(res.data);
	} catch (err) {
		dispatch(addError());
		console.log(err);
	}
};
