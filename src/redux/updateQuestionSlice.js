import {createSlice} from '@reduxjs/toolkit';

export const updateQuestionSlice = createSlice({
    name: 'updateQuestion', 
    initialState: {
        questionNum: 0
    },
    reducers: {
        updateQuestionNumber: (state, action) => {
            const updatedQuestion = {
                questionNum: state.questionNum + 1
            }
            return updatedQuestion
        }
    }
})

export const {updateQuestionNumber} = updateQuestionSlice.actions; 
export default updateQuestionSlice.reducer;