import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const budgetconnector_get_api_v1_users_id_read = createAsyncThunk("budgetconnector_response_get_Getuserdetails/budgetconnector_get_api_v1_users_id_read", async payload => {
  const response = await apiService.budgetconnector_get_api_v1_users_id_read(payload);
  return response.data;
});
export const budgetconnector_delete_api_v1_users_id_delete = createAsyncThunk("budgetconnector_response_get_Getuserdetails/budgetconnector_delete_api_v1_users_id_delete", async payload => {
  const response = await apiService.budgetconnector_delete_api_v1_users_id_delete(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const budgetconnector_response_get_GetuserdetailsSlice = createSlice({
  name: "budgetconnector_response_get_Getuserdetails",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(budgetconnector_get_api_v1_users_id_read.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_get_api_v1_users_id_read.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_get_api_v1_users_id_read.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_delete_api_v1_users_id_delete.pending, (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    }).addCase(budgetconnector_delete_api_v1_users_id_delete.fulfilled, (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    }).addCase(budgetconnector_delete_api_v1_users_id_delete.rejected, (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    });
  }
});
export default {
  budgetconnector_get_api_v1_users_id_read,
  budgetconnector_delete_api_v1_users_id_delete,
  slice: budgetconnector_response_get_GetuserdetailsSlice
};