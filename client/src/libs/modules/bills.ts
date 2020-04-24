import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as billsAPI from '../api/bills';
import { BillType, CartType } from '../api/bills';

// Action Types
const INITIALIZE = 'bills/INITIALIZE';
const CHANGE_FIELD = 'bills/CHANGE_FIELD';
const ADD_BILL = 'bills/ADD_BILL';
const ADD_BILL_SUCCESS = 'bills/ADD_BILL_SUCCESS';
const ADD_BILL_FAILURE = 'bills/ADD_BILL_FAILURE';

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
  bill: BillType | null;
  error: Error | null;
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

export const addBill = createAction(ADD_BILL)<BillType>();
export const addBillSuccess = createAction(ADD_BILL_SUCCESS)<BillType>();
export const addBillFailure = createAction(ADD_BILL_FAILURE)<Error>();

// Create Saga
const addBillSaga = createSaga(ADD_BILL, billsAPI.addBill);

export function* billsSaga() {
  yield takeLatest(ADD_BILL, addBillSaga);
}

const actions = {
  initialize,
  changeField,
  addBill,
  addBillSuccess,
  addBillFailure,
};

type BillAction = ActionType<typeof actions>;

const initialState: BillState = {
  title: '',
  hall: '',
  etc: ' ',
  total: 0,
  list: [],
  bill: null,
  error: null,
};

// Reducer
const bills = createReducer<BillState, BillAction>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
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
});

export default bills;
