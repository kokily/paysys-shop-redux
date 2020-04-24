import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as billsAPI from '../api/bills';
import { BillResponse } from '../api/bills';

// Action Types
const LIST_FRONTS = 'front/LIST_FRONTS';
const LIST_FRONTS_SUCCESS = 'front/LIST_FRONTS_SUCCESS';
const LIST_FRONTS_FAILURE = 'front/LIST_FRONTS_FAILURE';
const READ_FRONT = 'front/READ_FRONT';
const READ_FRONT_SUCCESS = 'front/READ_FRONT_SUCCESS';
const READ_FRONT_FAILURE = 'front/READ_FRONT_FAILURE';
const UNLOAD_FRONT = 'front/UNLOAD_FRONT';

// Typing
type FrontState = {
  fronts: BillResponse[] | null;
  error: Error | null;
  lastPage: number | string;
  front: BillResponse | null;
};

type ListType = {
  page: string | number;
  title: string;
  username: string;
};

// Action Creators
export const listFronts = createAction(
  LIST_FRONTS,
  ({ page, title, username }: ListType) => ({
    page,
    title,
    username,
  })
)<ListType>();
export const listFrontsSuccess = createAction(LIST_FRONTS_SUCCESS)<
  BillResponse[]
>();
export const listFrontsFailure = createAction(LIST_FRONTS_FAILURE)<Error>();

export const readFront = createAction(READ_FRONT)<string>();
export const readFrontSuccess = createAction(READ_FRONT_SUCCESS)<
  BillResponse
>();
export const readFrontFailure = createAction(READ_FRONT_FAILURE)<Error>();

export const unloadFront = createAction(UNLOAD_FRONT)<void>();

// Create Saga
const listFrontsSaga = createSaga(LIST_FRONTS, billsAPI.listBills);
const readFrontSaga = createSaga(READ_FRONT, billsAPI.readBill);

export function* frontsSaga() {
  yield takeLatest(LIST_FRONTS, listFrontsSaga);
  yield takeLatest(READ_FRONT, readFrontSaga);
}

const actions = {
  listFronts,
  listFrontsSuccess,
  listFrontsFailure,
  readFront,
  readFrontSuccess,
  readFrontFailure,
  unloadFront,
};

type FrontAction = ActionType<typeof actions>;

const initialState: FrontState = {
  fronts: null,
  error: null,
  lastPage: 1,
  front: null,
};

// Reducer
const fronts = createReducer<FrontState, FrontAction>(initialState, {
  // @ts-ignore
  [LIST_FRONTS_SUCCESS]: (state, { payload: fronts, meta: response }) => ({
    ...state,
    fronts,
    lastPage: parseInt(response.headers['last-page'], 10),
  }),
  [LIST_FRONTS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    fronts: null,
    error,
  }),
  [READ_FRONT_SUCCESS]: (state, { payload: front }) => ({
    ...state,
    front,
  }),
  [READ_FRONT_FAILURE]: (state, { payload: error }) => ({
    ...state,
    front: null,
    error,
  }),
  [UNLOAD_FRONT]: () => initialState,
});

export default fronts;
