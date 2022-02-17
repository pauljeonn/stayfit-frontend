import axios from 'axios';
import { getStart, getSuccess, getError } from './exercise';

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
