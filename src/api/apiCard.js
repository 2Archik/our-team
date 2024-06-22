import axios from "axios";

const BASE_URL = "https://reqres.in/api/";

export const getCardData = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}users/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
