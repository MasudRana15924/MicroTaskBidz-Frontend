import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { publicPost } from "../../utilities/apiCaller";


export const createContractorSignUp = createAsyncThunk(
  "/contractorsignup",
  async (data, { rejectWithValue }) => {
    try {
      const response = await publicPost("/contractor",data);
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

export const contractorSignUpSlice = createSlice({
  name: "contractorsignup",
  initialState: {
    isLoading: false,
    success: false,
    error: false,
    errorMessage:"",
  },

  extraReducers: (builder) => {
    builder.addCase(createContractorSignUp.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createContractorSignUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.contractorSignup = action.payload;
      state.success = true;
    });
    builder.addCase(createContractorSignUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = true;
      state.errorMessage = action.payload.data.message;
    });
  },
});

export default contractorSignUpSlice.reducer;