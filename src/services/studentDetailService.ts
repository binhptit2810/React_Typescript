// src/services/studentDetailService.ts
import axios from "axios";

const API_URL = "http://localhost:3001/student";

// Hàm lấy chi tiết sinh viên theo id
export const getStudentById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    if (response.data) {
      console.log("Thong tin sinh vien:", response.data);
      return response.data;
    } else {
      console.log("Khong tim thay ban ghi");
      return null;
    }
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      console.log("Khong tim thay ban ghi");
    } else {
      console.error("Loi khi goi API:", error);
    }
    return null;
  }
};
