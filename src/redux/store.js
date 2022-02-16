import { configureStore } from '@reduxjs/toolkit';
import exerciseReducer from './exercise';

export default configureStore({
	reducer: { exercise: exerciseReducer },
});
