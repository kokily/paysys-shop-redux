import qs from 'qs';
import client from './client';

export interface QueryType {
  page: string | number;
  husband?: string;
  bride?: string;
}

export interface WeddingResponse {
  _id: string;
  husband: string;
  bride: string;
  reservePay: number;
  husbandRental: number;
  husbandCompany: number;
  husbandAdd: number;
  husbandBouquet: number;
  husbandCeremony: number;
  husbandHanbok: number;
  husbandPlay: number;
  husbandAnthem: number;
  husbandModerator: number;
  husbandOfficiate: number;
  husbandEtc: number;
  brideRental: number;
  brideCompany: number;
  brideAdd: number;
  brideBouquet: number;
  brideCeremony: number;
  brideHanbok: number;
  bridePlay: number;
  brideAnthem: number;
  brideModerator: number;
  brideOfficiate: number;
  brideEtc: number;
  sumRental: number;
  sumCompany: number;
  sumAdd: number;
  sumBouquet: number;
  sumCeremony: number;
  sumHanbok: number;
  sumPlay: number;
  sumAnthem: number;
  sumModerator: number;
  sumOfficiate: number;
  sumEtc: number;
  husbandWedding: number;
  brideWedding: number;
  totalWedding: number;
  mealsPrice: number;
  husbandNum: number;
  brideNum: number;
  sumNum: number;
  husbandSum: number;
  brideSum: number;
  husbandMeal: number;
  brideMeal: number;
  totalMeals: number;
  reserve: string;
  husbandReserve: number;
  brideReserve: number;
  meal: string;
  user: {
    _id: string;
    username: string;
  };
  createdAt: string;
  updatedAt?: string;
  weddingAt: string;
}

// 웨딩 빌지 리스트 (GET) /api/weddings
export const listWeddings = ({ page, husband, bride }: QueryType) => {
  const queryString = qs.stringify({ page, husband, bride });
  return client.get<WeddingResponse[]>(`/api/weddings?${queryString}`);
};

// 웨딩 빌지 세부보기 (GET) /api/weddings/:id
export const readWedding = (id: string) =>
  client.get<WeddingResponse>(`/api/weddings/${id}`);

// 웨딩 빌지 삭제 (DELETE) /api/weddings/:id
export const removeWedding = (id: string) =>
  client.delete<void>(`/api/weddings/${id}`);
