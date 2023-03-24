import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { privatePost } from "../../utilities/apiCaller";


export const updateInfo = createAsyncThunk(
  "/updateInfo",
  async (data, { rejectWithValue }) => {
    try {
      const response = await privatePost("/user",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const updateInfoSlice = createSlice({
  name: "updateInfo",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(updateInfo.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateInfo.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.userInfo = action.payload;
      state.success = true;
    });
    builder.addCase(updateInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload;
    });
  },
});

export default updateInfoSlice.reducer;