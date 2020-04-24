import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as weddingsAPI from '../api/weddings';
import { WeddingResponse } from '../api/weddings';

// Action Types
const LIST_WEDDINGS = 'weddings/LIST_WEDDINGS';
const LIST_WEDDINGS_SUCCESS = 'weddings/LIST_WEDDINGS_SUCCESS';
const LIST_WEDDINGS_FAILURE = 'weddings/LIST_WEDDINGS_FAILURE';
const READ_WEDDING = 'weddings/READ_WEDDING';
const READ_WEDDING_SUCCESS = 'weddings/READ_WEDDING_SUCCESS';
const READ_WEDDING_FAILURE = 'weddings/READ_WEDDING_FAILURE';
const UNLOAD_WEDDING = 'weddings/UNLOAD_WEDDING';

// Typing
type ListType = {
  page: string | number;
  husband: string;
  bride: string;
};

type WeddingState = {
  weddings: WeddingResponse[] | null;
  error: Error | null;
  lastPage: number | string;
  wedding: WeddingResponse | null;
};

// Action Creators
export const listWeddings = createAction(
  LIST_WEDDINGS,
  ({ page, husband, bride }: ListType) => ({
    page,
    husband,
    bride,
  })
)<ListType>();
export const listWeddingsSuccess = createAction(LIST_WEDDINGS_SUCCESS)<
  WeddingResponse[]
>();
export const listWeddingsFailure = createAction(LIST_WEDDINGS_FAILURE)<Error>();

export const readWedding = createAction(READ_WEDDING)<string>();
export const readWeddingSuccess = createAction(READ_WEDDING_SUCCESS)<
  WeddingResponse
>();
export const readWeddingFailure = createAction(READ_WEDDING_FAILURE)<Error>();

export const unloadWedding = createAction(UNLOAD_WEDDING)<void>();

// Create Saga
const listWeddingsSaga = createSaga(LIST_WEDDINGS, weddingsAPI.listWeddings);
const readWeddingSaga = createSaga(READ_WEDDING, weddingsAPI.readWedding);

export function* weddingsSaga() {
  yield takeLatest(LIST_WEDDINGS, listWeddingsSaga);
  yield takeLatest(READ_WEDDING, readWeddingSaga);
}

const actions = {
  listWeddings,
  listWeddingsSuccess,
  listWeddingsFailure,
  readWedding,
  readWeddingSuccess,
  readWeddingFailure,
  unloadWedding,
};

type WeddingAction = ActionType<typeof actions>;

const initialState: WeddingState = {
  weddings: null,
  error: null,
  lastPage: 1,
  wedding: null,
};

// Reducer
const weddings = createReducer<WeddingState, WeddingAction>(initialState, {
  // @ts-ignore
  [LIST_WEDDINGS_SUCCESS]: (state, { payload: weddings, meta: response }) => ({
    ...state,
    weddings,
    lastPage: parseInt(response.headers['last-page'], 10),
  }),
  [LIST_WEDDINGS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    weddings: null,
    error,
  }),
  [READ_WEDDING_SUCCESS]: (state, { payload: wedding }) => ({
    ...state,
    wedding,
  }),
  [READ_WEDDING_FAILURE]: (state, { payload: error }) => ({
    ...state,
    wedding: null,
    error,
  }),
});

export default weddings;
