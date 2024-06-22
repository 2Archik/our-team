import axios from "axios";

const BASE_URL = "https://reqres.in/api/";

export const register = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}register`, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
