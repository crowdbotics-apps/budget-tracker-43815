import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const budgetconnector_patch_api_v1_items_id_partial_update = createAsyncThunk("budgetconnector_response_patch_Updateitems/budgetconnector_patch_api_v1_items_id_partial_update", async payload => {
  const response = await apiService.budgetconnector_patch_api_v1_items_id_partial_update(payload);
  return response.data;
});
export const budgetconnector_delete_api_v1_items_id_delete = createAsyncThunk("budgetconnector_response_patch_Updateitems/budgetconnector_delete_api_v1_items_id_delete", async payload => {
  const response = await apiService.budgetconnector_delete_api_v1_items_id_delete(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const budgetconnector_response_patch_UpdateitemsSlice = createSlice({
  name: "budgetconnector_response_patch_Updateitems",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(budgetconnector_patch_api_v1_items_id_partial_update.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_patch_api_v1_items_id_partial_update.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_patch_api_v1_items_id_partial_update.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_delete_api_v1_items_id_delete.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_delete_api_v1_items_id_delete.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_delete_api_v1_items_id_delete.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  budgetconnector_patch_api_v1_items_id_partial_update,
  budgetconnector_delete_api_v1_items_id_delete,
  slice: budgetconnector_response_patch_UpdateitemsSlice
};