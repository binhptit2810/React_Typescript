// src/services/studentCreateService.ts
import axios from "axios";

const API_URL = "http://localhost:3001/student";

// Hàm thêm mới sinh viên
export const createStudent = async (student: {
  id: number;
  student_name: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  created_at: string;
}) => {
  try {
    const response = await axios.post(API_URL, student);
    console.log("Sinh vien moi da duoc tao:", response.data);
    return response.data;
  } catch (error) {
    console.error("Loi khi tao sinh vien:", error);
    return null;
  }
};
