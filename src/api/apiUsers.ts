import axios from "axios";
import { IUser } from "../interfaces";

const BASE_URL = "https://reqres.in/api/";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await axios.get(`${BASE_URL}users`);
    return response.data.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
