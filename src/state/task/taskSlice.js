import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities/apiCaller";

export const createTask = createAsyncThunk(
  "/task",
  async (data, { rejectWithValue }) => {
    try {
      const response = await privatePost("/task",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const createTaskSlice = createSlice({
  name: "createTask",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createTask.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createTask.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userSignup = action.payload;
      state.success = true;
    });
    builder.addCase(createTask.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export default createTaskSlice.reducer;