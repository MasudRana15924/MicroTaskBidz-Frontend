import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../utilities/apiCaller";


export const createLogin = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/signin",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userDetails = action.payload;
      state.success = true;
    });
    builder.addCase(createLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export default loginSlice.reducer;