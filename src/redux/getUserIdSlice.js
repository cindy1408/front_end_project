import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getUserId = createAsyncThunk(
    'getUserId',
    async() => {
        const resp = await fetch("http://localhost:8080/buddy/quizResults");
        if (resp.ok){
            const data = await resp.json();
            const userId = data[data.length-1].id;
            return {userId};
        }
    })

export const startQuiz = createAsyncThunk(
    'startQuiz',
    async() => {
        const quizResult = {
            userExperience: null,
            plantExperience: null,
            plantType: null,
            plantId_1: 0,
            plantId_2: 0,
            plantId_3: 0
        }

        fetch("http://localhost:8080/buddy/quizResults", {
            method: "POST",
            headers: { 'Content-Type': 'application/json'
                        },
            body: JSON.stringify(quizResult)
            }) 
    }
)


export const getUserIdSlice = createSlice({
    name: 'startQuiz',
    initialState: 0,

    extraReducers: {
        [getUserId.fulfilled]: (state, action) => {
            return action.payload.userId;
        },
        [startQuiz.fulfilled]: (state, action) => {
            console.log(state);
        }
    }
})

export default getUserIdSlice.reducer;