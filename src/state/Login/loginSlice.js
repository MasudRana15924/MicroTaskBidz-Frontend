import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";


export const createLogin = createAsyncThunk(
  "/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/user/signin",data);
      return response;
    } catch (err) {
      console.log("error", err);
      return rejectWithValue(err.message);
    }
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(createLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.errorMessage = "";
    });
    builder.addCase(createLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export default loginSlice.reducer;