import { defineStore } from "pinia";
import axios from "axios";
import { API_ENDPOINTS } from "../API/api.js"
export const useStudentStore = defineStore({
  id: "student",
  state: () => ({
    error: true,
    data: [], 
    successMsg: false,
    errorMsg: false,
  }),
  getters: {
    showSuccessMsg: (state) => state.successMsg,
    showErrorMsg: (state) => state.errorMsg,
  },
  actions: {
    async getData() {
      try {
        const config = getAccessToken();

        const response = await axiosIns.get(
          API_ENDPOINTS.allUser
        );
         
        this.data = response.data;

        return response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStudent(id, details) {
      try {
        const config = getAccessToken();
         
        const response = await axiosIns.patch(
          `http://localhost:8000/student/update/${id}`,
          details,
          config
        );
        
        this.successMsg = true;
        setTimeout(() => (this.successMsg = false), 3000);

        return response;
      } catch (error) {
        console.error(error);
        this.errorMsg = true;
        setTimeout(() => (this.errorMsg = false), 3000);
      }
    }
  },
});