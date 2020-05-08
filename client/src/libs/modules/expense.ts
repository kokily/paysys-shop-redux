import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as expenseAPI from '../api/expense';
import { ExpenseResponse, ExpenseType, ExpenseUpdate } from '../api/expense';
import { WeddingResponse } from '../api/weddings';

// Action Types
const INITIALIZE = 'expense/INITIALIZE';
const CHANGE_FIELD = 'expense/CHANGE_FIELD';
const SET_ORIGINAL_EXPENSE = 'expense/SET_ORIGINAL_EXPENSE';
const ADD_EXPENSE = 'expense/ADD_EXPENSE';
const ADD_EXPENSE_SUCCESS = 'expense/ADD_EXPENSE_SUCCESS';
const ADD_EXPENSE_FAILURE = 'expense/ADD_EXPENSE_FAILURE';
const UPDATE_EXPENSE = 'expense/UPDATE_EXPENSE';
const UPDATE_EXPENSE_SUCCESS = 'expense/UPDATE_EXPENSE_SUCCESS';
const UPDATE_EXPENSE_FAILURE = 'expense/UPDATE_EXPENSE_FAILURE';

// Typing
type FormState = {
  key: string;
  value: string | number;
};

type ExpenseState = {
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
  weddingAt: string;
  eventAt: string;
  expense: ExpenseResponse | null;
  error: Error | null;
  originalExpenseId: string | null;
};

// Action Creators
export const initialize = createAction(INITIALIZE)<ExpenseState>();

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: FormState) => ({
    key,
    value,
  })
)<FormState>();

export const setOriginalExpense = createAction(SET_ORIGINAL_EXPENSE)<
  WeddingResponse
>();

export const addExpense = createAction(ADD_EXPENSE)<ExpenseType>();
export const addExpenseSuccess = createAction(ADD_EXPENSE_SUCCESS)<
  ExpenseResponse
>();
export const addExpenseFailure = createAction(ADD_EXPENSE_FAILURE)<Error>();

export const updateExpense = createAction(UPDATE_EXPENSE)<ExpenseUpdate>();
export const updateExpenseSuccess = createAction(UPDATE_EXPENSE_SUCCESS)<
  ExpenseResponse
>();
export const updateExpenseFailure = createAction(UPDATE_EXPENSE_FAILURE)<
  Error
>();

// Create Saga
const addExpenseSaga = createSaga(ADD_EXPENSE, expenseAPI.addExpense);
const updateExpenseSaga = createSaga(UPDATE_EXPENSE, expenseAPI.updateExpense);

export function* expenseSaga() {
  yield takeLatest(ADD_EXPENSE, addExpenseSaga);
  yield takeLatest(UPDATE_EXPENSE, updateExpenseSaga);
}

const actions = {
  initialize,
  changeField,
  setOriginalExpense,
  addExpense,
  addExpenseSuccess,
  addExpenseFailure,
  updateExpense,
  updateExpenseSuccess,
  updateExpenseFailure,
};

type ExpenseAction = ActionType<typeof actions>;

const initialState: ExpenseState = {
  husband: '',
  bride: '',
  reservePay: 0,
  husbandRental: 0,
  husbandCompany: 0,
  husbandAdd: 0,
  husbandBouquet: 0,
  husbandCeremony: 0,
  husbandHanbok: 0,
  husbandPlay: 0,
  husbandAnthem: 0,
  husbandModerator: 0,
  husbandOfficiate: 0,
  husbandEtc: 0,
  brideRental: 0,
  brideCompany: 0,
  brideAdd: 0,
  brideBouquet: 0,
  brideCeremony: 0,
  brideHanbok: 0,
  bridePlay: 0,
  brideAnthem: 0,
  brideModerator: 0,
  brideOfficiate: 0,
  brideEtc: 0,
  sumRental: 0,
  sumCompany: 0,
  sumAdd: 0,
  sumBouquet: 0,
  sumCeremony: 0,
  sumHanbok: 0,
  sumPlay: 0,
  sumAnthem: 0,
  sumModerator: 0,
  sumOfficiate: 0,
  sumEtc: 0,
  husbandWedding: 0,
  brideWedding: 0,
  totalWedding: 0,
  mealsPrice: 0,
  husbandNum: 0,
  brideNum: 0,
  sumNum: 0,
  husbandSum: 0,
  brideSum: 0,
  husbandMeal: 0,
  brideMeal: 0,
  totalMeals: 0,
  reserve: '',
  husbandReserve: 0,
  brideReserve: 0,
  meal: '',
  weddingAt: '',
  eventAt: '11:30',
  expense: null,
  error: null,
  originalExpenseId: null,
};

// Reducer
const expense = createReducer<ExpenseState, ExpenseAction>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [SET_ORIGINAL_EXPENSE]: (state, { payload: expense }) => ({
    ...state,
    husband: expense.husband,
    bride: expense.bride,
    reservePay: expense.reservePay,
    husbandRental: expense.husbandRental,
    husbandCompany: expense.husbandCompany,
    husbandAdd: expense.husbandAdd,
    husbandBouquet: expense.husbandBouquet,
    husbandCeremony: expense.husbandCeremony,
    husbandHanbok: expense.husbandHanbok,
    husbandPlay: expense.husbandPlay,
    husbandAnthem: expense.husbandAnthem,
    husbandModerator: expense.husbandModerator,
    husbandOfficiate: expense.husbandOfficiate,
    husbandEtc: expense.husbandEtc,
    brideRental: expense.brideRental,
    brideCompany: expense.brideCompany,
    brideAdd: expense.brideAdd,
    brideBouquet: expense.brideBouquet,
    brideCeremony: expense.brideCeremony,
    brideHanbok: expense.brideHanbok,
    bridePlay: expense.bridePlay,
    brideAnthem: expense.brideAnthem,
    brideModerator: expense.brideModerator,
    brideOfficiate: expense.brideOfficiate,
    brideEtc: expense.brideEtc,
    sumRental: expense.sumRental,
    sumCompany: expense.sumCompany,
    sumAdd: expense.sumAdd,
    sumBouquet: expense.sumBouquet,
    sumCeremony: expense.sumCeremony,
    sumHanbok: expense.sumHanbok,
    sumPlay: expense.sumPlay,
    sumAnthem: expense.sumAnthem,
    sumModerator: expense.sumModerator,
    sumOfficiate: expense.sumOfficiate,
    sumEtc: expense.sumEtc,
    husbandWedding: expense.husbandWedding,
    brideWedding: expense.brideWedding,
    totalWedding: expense.totalWedding,
    mealsPrice: expense.mealsPrice,
    husbandNum: expense.husbandNum,
    brideNum: expense.brideNum,
    sumNum: expense.sumNum,
    husbandSum: expense.husbandSum,
    brideSum: expense.brideSum,
    husbandMeal: expense.husbandMeal,
    brideMeal: expense.brideMeal,
    totalMeals: expense.totalMeals,
    reserve: expense.reserve,
    husbandReserve: expense.husbandReserve,
    brideReserve: expense.brideReserve,
    meal: expense.meal,
    weddingAt: expense.weddingAt,
    eventAt: expense.eventAt,
    originalExpenseId: expense._id,
  }),
  [ADD_EXPENSE_SUCCESS]: (state, { payload: expense }) => ({
    ...state,
    expense,
  }),
  [ADD_EXPENSE_FAILURE]: (state, { payload: error }) => ({
    ...state,
    expense: null,
    error,
  }),
  [UPDATE_EXPENSE_SUCCESS]: (state, { payload: expense }) => ({
    ...state,
    expense,
  }),
  [UPDATE_EXPENSE_FAILURE]: (state, { payload: error }) => ({
    ...state,
    expense: null,
    error,
  }),
});

export default expense;
