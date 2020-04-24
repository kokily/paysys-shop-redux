import qs from 'qs';
import client from './client';

export interface QueryType {
  native?: string;
  divide?: string;
}

export interface MenuResponse {
  _id: string;
  num: number;
  name: string;
  native: string;
  divide: string;
  unit: string;
  price: number;
}

// 메뉴 리스트 (GET) /api/menu
export const listMenu = ({ native, divide }: QueryType) => {
  const queryString = qs.stringify({ native, divide });
  return client.get<MenuResponse[]>(`/api/menu?${queryString}`);
};

// 메뉴 세부보기 (GET) /api/menu/:id
export const readMenu = (id: string) =>
  client.get<MenuResponse>(`/api/menu/${id}`);
