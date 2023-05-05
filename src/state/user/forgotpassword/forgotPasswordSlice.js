import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../../utilities/apiCaller";


export const forgotPassword = createAsyncThunk(
    "/forgotPassword",
    async (data, { rejectWithValue }) => {
        try {
            const response = await publicPost("/password/forgot", data);
            return response;
        } catch (err) {
            return rejectWithValue(err);
        }
    }
);

export const forgotPasswordSlice = createSlice({
    name: "forgotPassword",
    initialState: {
        forgotPassword: [],
        isLoading: false,
        success: false,
        error: false,
        errorMessage: "",
    },

    extraReducers: (builder) => {
        builder.addCase(forgotPassword.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(forgotPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.forgotPassword = action.payload.userId;
            state.success = true;
        });
        builder.addCase(forgotPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
            state.errorMessage = action.payload.data.message;
        });
    },
});

export default forgotPasswordSlice.reducer;