import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const budgetconnector_get_api_v1_items_list = createAsyncThunk("budgetconnector_response_get_Listitems/budgetconnector_get_api_v1_items_list", async payload => {
  const response = await apiService.budgetconnector_get_api_v1_items_list(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const budgetconnector_response_get_ListitemsSlice = createSlice({
  name: "budgetconnector_response_get_Listitems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(budgetconnector_get_api_v1_items_list.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_get_api_v1_items_list.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_get_api_v1_items_list.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  budgetconnector_get_api_v1_items_list,
  slice: budgetconnector_response_get_ListitemsSlice
};