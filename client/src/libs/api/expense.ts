import client from './client';

export type ExpenseType = {
  husband: string;
  bride: string;
  reservePay: number;
  husbandRental: number;
  husbandCompany: number;
  husbandAdd: number;
  husbandToday: number;
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
  brideToday: number;
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
  sumToday: number;
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
  user?: {
    _id: string;
    username: string;
  };
  createdAt?: string;
  updatedAt?: string;
  weddingAt?: string;
  eventAt?: string;
};

export type ExpenseUpdate = {
  id: string;
} & ExpenseType;

export type ExpenseResponse = {
  _id: string;
} & ExpenseType;

// 웨딩 빌지 추가 (POST) /api/weddings
export const addExpense = ({
  husband,
  bride,
  reservePay,
  husbandRental,
  husbandCompany,
  husbandAdd,
  husbandToday,
  husbandBouquet,
  husbandCeremony,
  husbandHanbok,
  husbandPlay,
  husbandAnthem,
  husbandModerator,
  husbandOfficiate,
  husbandEtc,
  brideRental,
  brideCompany,
  brideAdd,
  brideToday,
  brideBouquet,
  brideCeremony,
  brideHanbok,
  bridePlay,
  brideAnthem,
  brideModerator,
  brideOfficiate,
  brideEtc,
  sumRental,
  sumCompany,
  sumAdd,
  sumToday,
  sumBouquet,
  sumCeremony,
  sumHanbok,
  sumPlay,
  sumAnthem,
  sumModerator,
  sumOfficiate,
  sumEtc,
  husbandWedding,
  brideWedding,
  totalWedding,
  mealsPrice,
  husbandNum,
  brideNum,
  sumNum,
  husbandMeal,
  brideMeal,
  totalMeals,
  husbandSum,
  brideSum,
  reserve,
  husbandReserve,
  brideReserve,
  meal,
  weddingAt,
  eventAt,
}: ExpenseType) =>
  client.post<ExpenseResponse>('/api/weddings', {
    husband,
    bride,
    reservePay,
    husbandRental,
    husbandCompany,
    husbandAdd,
    husbandToday,
    husbandBouquet,
    husbandCeremony,
    husbandHanbok,
    husbandPlay,
    husbandAnthem,
    husbandModerator,
    husbandOfficiate,
    husbandEtc,
    brideRental,
    brideCompany,
    brideAdd,
    brideToday,
    brideBouquet,
    brideCeremony,
    brideHanbok,
    bridePlay,
    brideAnthem,
    brideModerator,
    brideOfficiate,
    brideEtc,
    sumRental,
    sumCompany,
    sumAdd,
    sumToday,
    sumBouquet,
    sumCeremony,
    sumHanbok,
    sumPlay,
    sumAnthem,
    sumModerator,
    sumOfficiate,
    sumEtc,
    husbandWedding,
    brideWedding,
    totalWedding,
    mealsPrice,
    husbandNum,
    brideNum,
    sumNum,
    husbandMeal,
    brideMeal,
    totalMeals,
    husbandSum,
    brideSum,
    reserve,
    husbandReserve,
    brideReserve,
    meal,
    weddingAt,
    eventAt,
  });

// 웨딩 빌지 수정 (PATCH) /api/weddings/:id
export const updateExpense = ({
  id,
  husband,
  bride,
  reservePay,
  husbandRental,
  husbandCompany,
  husbandAdd,
  husbandToday,
  husbandBouquet,
  husbandCeremony,
  husbandHanbok,
  husbandPlay,
  husbandAnthem,
  husbandModerator,
  husbandOfficiate,
  husbandEtc,
  brideRental,
  brideCompany,
  brideAdd,
  brideToday,
  brideBouquet,
  brideCeremony,
  brideHanbok,
  bridePlay,
  brideAnthem,
  brideModerator,
  brideOfficiate,
  brideEtc,
  sumRental,
  sumCompany,
  sumAdd,
  sumToday,
  sumBouquet,
  sumCeremony,
  sumHanbok,
  sumPlay,
  sumAnthem,
  sumModerator,
  sumOfficiate,
  sumEtc,
  husbandWedding,
  brideWedding,
  totalWedding,
  mealsPrice,
  husbandNum,
  brideNum,
  sumNum,
  husbandMeal,
  brideMeal,
  totalMeals,
  husbandSum,
  brideSum,
  reserve,
  husbandReserve,
  brideReserve,
  meal,
  weddingAt,
  eventAt,
}: ExpenseUpdate) =>
  client.patch<ExpenseResponse>(`/api/weddings/${id}`, {
    husband,
    bride,
    reservePay,
    husbandRental,
    husbandCompany,
    husbandAdd,
    husbandToday,
    husbandBouquet,
    husbandCeremony,
    husbandHanbok,
    husbandPlay,
    husbandAnthem,
    husbandModerator,
    husbandOfficiate,
    husbandEtc,
    brideRental,
    brideCompany,
    brideAdd,
    brideToday,
    brideBouquet,
    brideCeremony,
    brideHanbok,
    bridePlay,
    brideAnthem,
    brideModerator,
    brideOfficiate,
    brideEtc,
    sumRental,
    sumCompany,
    sumAdd,
    sumToday,
    sumBouquet,
    sumCeremony,
    sumHanbok,
    sumPlay,
    sumAnthem,
    sumModerator,
    sumOfficiate,
    sumEtc,
    husbandWedding,
    brideWedding,
    totalWedding,
    mealsPrice,
    husbandNum,
    brideNum,
    sumNum,
    husbandMeal,
    brideMeal,
    totalMeals,
    husbandSum,
    brideSum,
    reserve,
    husbandReserve,
    brideReserve,
    meal,
    weddingAt,
    eventAt,
  });
