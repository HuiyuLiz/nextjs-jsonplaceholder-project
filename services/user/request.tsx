import { cache } from "react";
import http from "@/utils/http";
import type { User } from "./type";

export const revalidate = 3600; // revalidate the data at most every hour

export const getUsers = cache(async () => {
  return await http.get<User[]>("/users");
});

export const getUser = (userId: string) => {
  return http.get<User>(`/users/${userId}`);
};
