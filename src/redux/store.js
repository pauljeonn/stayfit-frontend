import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './exercise';
import authReducer from './auth';

export default configureStore({
	reducer: {
		exercise: exerciseReducer,
		auth: authReducer,
	},
});
