import {configureStore} from '@reduxjs/toolkit';
import updateQuizReducer from './updateQuizSlice';
import getUserIdReducer from './getUserIdSlice';
import { updateQuestionNumber } from './updateQuestionSlice';
export default configureStore({
    reducer:{
        quizResult: updateQuizReducer,
        userId: getUserIdReducer,
        userResult: getUserIdReducer,
        updateQuestion: updateQuestionNumber,
    },
});