import { IPost } from "./post.interface";

export interface ICategory {
  id: number;
  name: string;
  imageUri: string;
  description?: string;
  backgroundFallback: string;
  posts?: IPost[];
}
