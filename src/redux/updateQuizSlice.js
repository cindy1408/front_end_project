import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const updateQuizResult = createAsyncThunk(
    'quizResult/updateUserExperience',
    async(payload) => {
        const resp = await fetch(`http://localhost:8082/buddy/quizResults/updateUserExperience/${payload.userId}`, {
            method: "PUT", 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload.quizResult)
        })

        console.log(resp)
    }
)

export const updateQuizSlice = createSlice({
    name: 'quizResult',
    initialState: {
        userExperience: null,
        plantExperience: null,
        plantType: null,
        plantId_1: 0,
        plantId_2: 0,
        plantId_3: 0, 
    },

    reducers: {
        updateUserExperience: (state, action) => {
            const newResult = {
                userExperience: action.payload.choice,
                plantExperience: null,
                plantType: null,
                plantId_1: 0,
                plantId_2: 0,
                plantId_3: 0, 
            }
            return newResult;
        }
    }, 

    extraReducers: {
        [updateQuizResult.fulfilled]: (state, action) => {
            console.log(action.payload);
        }
    }
})

export const {updateUserExperience} = updateQuizSlice.actions;
export default updateQuizSlice.reducer;