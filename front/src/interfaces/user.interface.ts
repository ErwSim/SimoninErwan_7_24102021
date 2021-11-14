import { IPost } from "./post.interface";

export interface IUser {
  id: number;
  email: string;
  password?: string;
  firstname: string;
  lastname: string;
  admin: boolean;
  createdAt: Date;
  token: string;
  posts?: IPost[];
}
