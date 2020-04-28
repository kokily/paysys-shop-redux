import qs from 'qs';
import client from './client';
import { AuthResponse } from './auth';

export interface QueryType {
  page: string | number;
  username?: string;
}

// 사용자 목록 (GET) /api/users
export const listUsers = ({ page, username }: QueryType) => {
  const queryString = qs.stringify({ page, username });
  return client.get<AuthResponse>(`/api/users?${queryString}`);
};

// 사용자 정보 (GET) /api/users/:id
export const readUser = (id: string) =>
  client.get<AuthResponse>(`/api/users/${id}`);

// 사용자 삭제 (DELETE) /api/users/:id
export const removeUser = (id: string) =>
  client.delete<void>(`/api/users/${id}`);
