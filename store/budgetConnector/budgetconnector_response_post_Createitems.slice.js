import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const budgetconnector_post_api_v1_items_create = createAsyncThunk("budgetconnector_response_post_Createitems/budgetconnector_post_api_v1_items_create", async payload => {
  const response = await apiService.budgetconnector_post_api_v1_items_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const budgetconnector_response_post_CreateitemsSlice = createSlice({
  name: "budgetconnector_response_post_Createitems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(budgetconnector_post_api_v1_items_create.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_post_api_v1_items_create.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_post_api_v1_items_create.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  budgetconnector_post_api_v1_items_create,
  slice: budgetconnector_response_post_CreateitemsSlice
};