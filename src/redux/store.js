import {configureStore} from '@reduxjs/toolkit';
import updateQuizReducer from './updateQuizSlice';
import getUserIdReducer from './getUserIdSlice';
export default configureStore({
    reducer:{
        quizResult: updateQuizReducer,
        userId: getUserIdReducer,
    },
});