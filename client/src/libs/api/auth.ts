import client from './client';

export interface AuthResponse {
  _id: string;
  username: string;
  createdAt: Date;
}

export interface UserType {
  username: string;
  password: string;
}

// 사원등록 (POST) /api/auth/register
export const register = ({ username, password }: UserType) =>
  client.post<AuthResponse>('/api/auth/register', { username, password });

// 로그인 (POST) /api/auth/login
export const login = ({ username, password }: UserType) =>
  client.post<AuthResponse>('/api/auth/login', { username, password });

// 로그아웃 (POST) /api/auth/logout
export const logout = () => client.post<void>('/api/auth/logout');

// 사용자 체크 (GET) /api/auth/check
export const check = () => client.get<AuthResponse>('/api/auth/check');
