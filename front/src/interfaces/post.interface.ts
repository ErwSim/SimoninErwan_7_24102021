import { ICategory, IUser } from ".";

export interface IPost {
  id: number;
  title?: String;
  createdAt: Date;
  content: string;
  spoiler: boolean;
  userId: number;
  categoryId: number;
  postId?: number;
  category?: ICategory;
  messages?: IPost[];
  user?: IUser;
}
