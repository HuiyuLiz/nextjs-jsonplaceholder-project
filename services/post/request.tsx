import type { Post } from "./type";
import http from "@/utils/http";

export const getPosts = (userId: string) => {
  return http.get<Post[]>(`/posts?userId=${userId}`);
};
