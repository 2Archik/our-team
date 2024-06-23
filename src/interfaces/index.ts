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
