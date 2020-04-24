import qs from 'qs';
import client from './client';

export interface QueryType {
  page: string | number;
  name?: string;
}

export type ItemType = {
  name: string;
  native: string;
  divide: string;
  unit: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
};

export type ItemUpdate = {
  id: string;
} & ItemType;

export type ItemResponse = {
  _id: string;
} & ItemType;

// 아이템 리스트 (GET) /api/items
export const listItems = ({ page, name }: QueryType) => {
  const queryString = qs.stringify({ page, name });
  return client.get<ItemResponse[]>(`/api/items?${queryString}`);
};

// 아이템 세부보기 (GET) /api/items/:id
export const readItem = (id: string) =>
  client.get<ItemResponse>(`/api/items/${id}`);

// 아이템 추가 (POST) /api/items
export const addItem = ({ name, native, divide, unit, price }: ItemType) =>
  client.post<ItemResponse>('/api/items', {
    name,
    native,
    divide,
    unit,
    price,
  });

// 아이템 삭제 (DELETE) /api/items/:id
export const removeItem = (id: string) =>
  client.delete<void>(`/api/items/${id}`);

// 아이템 수정 (PATCH) /api/items/:id
export const updateItem = ({
  id,
  name,
  native,
  divide,
  unit,
  price,
}: ItemUpdate) =>
  client.patch<ItemResponse>(`/api/items/${id}`, {
    name,
    native,
    divide,
    unit,
    price,
  });
