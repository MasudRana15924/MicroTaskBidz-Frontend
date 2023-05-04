import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getFilterDoctors } from './filterApi';

export const fetchFilterDoctors = createAsyncThunk(
    'doctors/fetchfilterDoctors',
    async ({expert,gender,location}) => {
        const doctors = await getFilterDoctors(expert,gender,location);
        return doctors;
    }
);
export const filterdoctorsSlice = createSlice({
    name: 'filterdoctors',
    initialState:{
        filterDoctors: [],
        isLoading: false,
        isError: false,
        error: ''
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilterDoctors.pending, (state) => {
                state.isError = false;
                state.isLoading = true
            })
            .addCase(fetchFilterDoctors.fulfilled, (state, action) => {
                state.filterDoctors = action.payload;
                state.isLoading = false
                
            })
            .addCase(fetchFilterDoctors.rejected, (state, action) => {
                state.isLoading = true
                state.filterDoctors = [];
                state.isError = true;
                state.error = action.payload.error?.message;
            })
    }
});

export default filterdoctorsSlice.reducer;