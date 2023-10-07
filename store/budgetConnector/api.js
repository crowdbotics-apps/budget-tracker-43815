import axios from "axios"
const budgetConnector = axios.create({
  baseURL: "https://budget-tracker-43815.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function budgetconnector_get_api_v1_items_list(payload) {
  return budgetConnector.get(`/api/v1/items/`)
}
function budgetconnector_post_api_v1_items_create(payload) {
  return budgetConnector.post(`/api/v1/items/`, payload)
}
function budgetconnector_get_api_v1_users_list(payload) {
  return budgetConnector.get(`/api/v1/users/`)
}
function budgetconnector_post_api_v1_signup_create(payload) {
  return budgetConnector.post(`/api/v1/signup/`, payload)
}
function budgetconnector_get_api_v1_items_id_read(payload) {
  return budgetConnector.get(`/api/v1/items/${payload.id}/`)
}
function budgetconnector_patch_api_v1_items_id_partial_update(payload) {
  return budgetConnector.patch(`/api/v1/items/${payload.id}/`, payload)
}
function budgetconnector_delete_api_v1_items_id_delete(payload) {
  return budgetConnector.delete(`/api/v1/items/${payload.id}/`)
}
function budgetconnector_get_api_v1_users_id_read(payload) {
  return budgetConnector.get(`/api/v1/users/${payload.id}/`)
}
function budgetconnector_delete_api_v1_users_id_delete(payload) {
  return budgetConnector.delete(`/api/v1/users/${payload.id}/`)
}
export const apiService = {
  budgetconnector_get_api_v1_items_list,
  budgetconnector_post_api_v1_items_create,
  budgetconnector_get_api_v1_users_list,
  budgetconnector_post_api_v1_signup_create,
  budgetconnector_get_api_v1_items_id_read,
  budgetconnector_patch_api_v1_items_id_partial_update,
  budgetconnector_delete_api_v1_items_id_delete,
  budgetconnector_get_api_v1_users_id_read,
  budgetconnector_delete_api_v1_users_id_delete
}
