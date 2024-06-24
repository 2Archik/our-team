export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IUsersApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUser[];
  support: ISupport;
}

export interface ICardApiResponse {
  data: IUser;
  support: ISupport;
}

interface ISupport {
  url: string;
  text: string;
}

export interface IRegisterApiResponse {
  id: number;
  token: string;
}
