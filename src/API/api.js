// task
const BASE_URL = 'http://localhost:8080/api/';

const API_ENDPOINTS = {
    // AUTH
    changePassword: BASE_URL + 'user/change-password/', // + studentId
    forgetPassword: BASE_URL + 'user/forget-password', 
    resetPassword: BASE_URL + 'user/reset-password', 
    // USER
    allUser: BASE_URL + 'user/all-user', // + get all user 
  };  
  
  export default API_ENDPOINTS;   