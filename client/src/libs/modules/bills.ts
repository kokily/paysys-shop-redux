import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as billsAPI from '../api/bills';
import { BillType, CartType, BillResponse, BillUpdate } from '../api/bills';

// Action Types
const INITIALIZE = 'bills/INITIALIZE';
const CHANGE_FIELD = 'bills/CHANGE_FIELD';
const SET_ORIGINAL_BILL = 'bills/SET_ORIGINAL_BILL';
const ADD_BILL = 'bills/ADD_BILL';
const ADD_BILL_SUCCESS = 'bills/ADD_BILL_SUCCESS';
const ADD_BILL_FAILURE = 'bills/ADD_BILL_FAILURE';
const UPDATE_BILL = 'bills/UPDATE_BILL';
const UPDATE_BILL_SUCCESS = 'bills/UPDATE_BILL_SUCCESS';
const UPDATE_BILL_FAILURE = 'bills/UPDATE_BILL_FAILURE';

// Typing
type FormState = {
  key: string;
  value: string | number;
};

type BillState = {
  title: string;
  hall: string;
  etc: string;
  total: number;
  list: CartType[] | null;
  reserve?: number | null;
  bill: BillType | null;
  error: Error | null;
  originalBillId?: string | null;
};

// Action Creators
export const initialize = createAction(INITIALIZE)<BillState>();

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: FormState) => ({
    key,
    value,
  })
)<FormState>();

export const setOriginalBill = createAction(SET_ORIGINAL_BILL)<BillResponse>();

export const addBill = createAction(ADD_BILL)<BillType>();
export const addBillSuccess = createAction(ADD_BILL_SUCCESS)<BillType>();
export const addBillFailure = createAction(ADD_BILL_FAILURE)<Error>();

export const updateBill = createAction(UPDATE_BILL)<BillUpdate>();
export const updateBillSuccess = createAction(UPDATE_BILL_SUCCESS)<
  BillResponse
>();
export const updateBillFailure = createAction(UPDATE_BILL_FAILURE)<Error>();

// Create Saga
const addBillSaga = createSaga(ADD_BILL, billsAPI.addBill);
const updateBillSaga = createSaga(UPDATE_BILL, billsAPI.addReserve);

export function* billsSaga() {
  yield takeLatest(ADD_BILL, addBillSaga);
  yield takeLatest(UPDATE_BILL, updateBillSaga);
}

const actions = {
  initialize,
  changeField,
  setOriginalBill,
  addBill,
  addBillSuccess,
  addBillFailure,
  updateBill,
  updateBillSuccess,
  updateBillFailure,
};

type BillAction = ActionType<typeof actions>;

const initialState: BillState = {
  title: '',
  hall: '',
  etc: ' ',
  total: 0,
  list: [],
  reserve: 0,
  bill: null,
  error: null,
  originalBillId: null,
};

// Reducer
const bills = createReducer<BillState, BillAction>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [SET_ORIGINAL_BILL]: (state, { payload: bill }) => ({
    ...state,
    title: bill.title,
    hall: bill.hall,
    etc: bill.etc,
    total: bill.total,
    list: bill.list,
    originalBillId: bill._id,
  }),
  [ADD_BILL_SUCCESS]: (state, { payload: bill }) => ({
    ...state,
    bill,
  }),
  [ADD_BILL_FAILURE]: (state, { payload: error }) => ({
    ...state,
    bill: null,
    error,
  }),
  [UPDATE_BILL_SUCCESS]: (state, { payload: bill }) => ({
    ...state,
    bill,
  }),
  [UPDATE_BILL_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
});

export default bills;
