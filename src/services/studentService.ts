import axios from "axios";

const API_URL = "http://localhost:3001/student";

export const getAllStudent = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error;
  }
};
