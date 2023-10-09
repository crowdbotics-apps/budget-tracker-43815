import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const budgetconnector_get_api_v1_items_id_read = createAsyncThunk("budgetconnector_response_get_Getitems/budgetconnector_get_api_v1_items_id_read", async payload => {
  const response = await apiService.budgetconnector_get_api_v1_items_id_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const budgetconnector_response_get_GetitemsSlice = createSlice({
  name: "budgetconnector_response_get_Getitems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(budgetconnector_get_api_v1_items_id_read.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_get_api_v1_items_id_read.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_get_api_v1_items_id_read.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  budgetconnector_get_api_v1_items_id_read,
  slice: budgetconnector_response_get_GetitemsSlice
};