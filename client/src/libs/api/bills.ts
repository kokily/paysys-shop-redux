import qs from 'qs';
import client from './client';

export interface QueryType {
  page?: string | number;
  title?: string;
  username?: string;
}

export interface CartType {
  _id: string;
  name: string;
  native: string;
  divide: string;
  price: number;
  unit: string;
  count: number;
  amount: number;
}

export type BillType = {
  title: string;
  hall: string;
  etc: string;
  total: number;
  list: CartType[];
  reserve?: number;
};

export type BillUpdate = {
  id: string;
} & BillType;

export interface BillResponse {
  _id: string;
  title: string;
  hall: string;
  etc: string;
  total: number;
  list: CartType[];
  user: {
    _id: string;
    username: string;
  };
  reserve?: number;
  createdAt: string;
}

// 빌지 리스트 (GET) /api/bills
export const listBills = ({ page, title, username }: QueryType) => {
  const queryString = qs.stringify({ page, title, username });
  return client.get<BillResponse[]>(`/api/bills?${queryString}`);
};

// 빌지 세부보기 (GET) /api/bills/:id
export const readBill = (id: string) =>
  client.get<BillResponse>(`/api/bills/${id}`);

// 빌지 추가 (POST) /api/bills
export const addBill = ({ title, hall, etc, total, list }: BillType) =>
  client.post<BillResponse>('/api/bills', { title, hall, etc, total, list });

// 빌지 삭제 (GET) /api/bills/:id
export const removeBill = (id: string) =>
  client.delete<void>(`/api/bills/${id}`);

// 예약금 추가 (PATCH) /api/bills/:id
export const addReserve = ({
  id,
  title,
  hall,
  etc,
  total,
  list,
  reserve,
}: BillUpdate) =>
  client.patch<BillResponse>(`/api/bills/${id}`, {
    title,
    hall,
    etc,
    total,
    list,
    reserve,
  });
