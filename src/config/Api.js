const { VITE_API_DOMAIN, REACT_APP_API_WEB_DOMAIN } = import.meta.env;

export const API_DOMAIN = VITE_API_DOMAIN + "api/v1/admin/";
// export const API_WEB_DOMAIN = REACT_APP_API_WEB_DOMAIN;

export const API_ADMIN_REGISTER = API_DOMAIN + "admin-register";
export const API_ADMIN_LOGIN = API_DOMAIN + "login";

//Customer
export const API_LIST_CUSTOMER = API_DOMAIN + "customers";
