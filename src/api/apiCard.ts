import axios from "axios";
import { IUser } from "../interfaces";

const BASE_URL = "https://reqres.in/api/";

export const getCardData = async (id: string | undefined): Promise<IUser> => {
  try {
    const response = await axios.get(`${BASE_URL}users/${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return { id: 0, email: "", first_name: "", last_name: "", avatar: "" };
  }
};
