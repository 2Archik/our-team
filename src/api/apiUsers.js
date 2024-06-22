import axios from "axios";

const BASE_URL = "https://reqres.in/api/";

export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
