import axios from "axios"
const budgettrackerAPI = axios.create({
  baseURL: "https://budget-tracker-43815.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return budgettrackerAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_items_list(payload) {
  return budgettrackerAPI.get(`/api/v1/items/`)
}
function api_v1_items_create(payload) {
  return budgettrackerAPI.post(`/api/v1/items/`, payload)
}
function api_v1_items_retrieve(payload) {
  return budgettrackerAPI.get(`/api/v1/items/${payload.id}/`)
}
function api_v1_items_update(payload) {
  return budgettrackerAPI.put(`/api/v1/items/${payload.id}/`, payload)
}
function api_v1_items_partial_update(payload) {
  return budgettrackerAPI.patch(`/api/v1/items/${payload.id}/`, payload)
}
function api_v1_items_destroy(payload) {
  return budgettrackerAPI.delete(`/api/v1/items/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return budgettrackerAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return budgettrackerAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_users_list(payload) {
  return budgettrackerAPI.get(`/api/v1/users/`)
}
function api_v1_users_retrieve(payload) {
  return budgettrackerAPI.get(`/api/v1/users/${payload.id}/`)
}
function api_v1_users_destroy(payload) {
  return budgettrackerAPI.delete(`/api/v1/users/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return budgettrackerAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return budgettrackerAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return budgettrackerAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return budgettrackerAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_items_list,
  api_v1_items_create,
  api_v1_items_retrieve,
  api_v1_items_update,
  api_v1_items_partial_update,
  api_v1_items_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_users_list,
  api_v1_users_retrieve,
  api_v1_users_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
