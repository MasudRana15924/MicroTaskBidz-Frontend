import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // tags gula 
    experts: [],
    search: "",
}

const filterSlice = createSlice({
    name: 'filterDoctors',
    initialState,
    reducers: {
        expertSelected: (state, action) => {
            state.experts.push(action.payload);
        },
        expertRemoved: (state, action) => {
            // tag ta cahe kina tai tags array te index ber korte hobe 
            const indexToRemove = state.experts.indexOf(action.payload)
            if (indexToRemove !== -1) {
                // jodi thake tahole ekta tag remove korbe
                state.experts.splice(indexToRemove, 1)
            }
        },
        searched:(state,action)=>{
            state.search=action.payload
        }
    }
});

export default filterSlice.reducer;
export const {expertSelected,expertRemoved,searched}=filterSlice.actions