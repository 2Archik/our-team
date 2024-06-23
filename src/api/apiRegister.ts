import axios from "axios";
import { IForm } from "../interfaces";

const BASE_URL = "https://reqres.in/api/";

interface IRegisterResponse {
  id: number;
  token: string;
}

export const registration = async (data: IForm): Promise<IRegisterResponse> => {
  try {
    const response = await axios.post(`${BASE_URL}register`, data);
    return response.data;
  } catch (error) {
    console.log(error);
    return { id: 0, token: "" };
  }
};
