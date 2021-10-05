import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getUserResult = createAsyncThunk(
    'getUserResult', 
    async() => {
        const resp = await fetch("http://localhost:8080/buddy/quizResults");
        if(resp.ok){
            const data = await resp.json();
            const userResult = data[data.length-1].plantId_1; 
            return {userResult}
        }
    }
)