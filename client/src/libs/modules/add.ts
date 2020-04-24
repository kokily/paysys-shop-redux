import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as itemsAPI from '../api/items';
import { ItemResponse, ItemType, ItemUpdate } from '../api/items';

// Action Types
const INITIALIZE = 'add/INITAILIZE';
const CHANGE_FIELD = 'add/CHANGE_FIELD';
const SET_ORIGINAL_ITEM = 'add/SET_ORIGINAL_ITEM';
const ADD_ITEM = 'add/ADD_ITEM';
const ADD_ITEM_SUCCESS = 'add/ADD_ITEM_SUCCESS';
const ADD_ITEM_FAILURE = 'add/ADD_ITEM_FAILURE';
const UPDATE_ITEM = 'add/UPDATE_ITEM';
const UPDATE_ITEM_SUCCESS = 'add/UPDATE_ITEM_SUCCESS';
const UPDATE_ITEM_FAILURE = 'add/UPDATE_ITEM_FAILURE';

// Typing
type FormState = {
  key: string;
  value: string | number;
};

type AddState = {
  name: string;
  native: string;
  divide: string;
  unit: string;
  price: number;
  item: ItemResponse | null;
  error: Error | null;
  originalItemId: string | null;
};

// Action Creators
export const initialize = createAction(INITIALIZE)<AddState>();

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: FormState) => ({
    key,
    value,
  })
)<FormState>();

export const setOriginalItem = createAction(SET_ORIGINAL_ITEM)<ItemResponse>();

export const addItem = createAction(ADD_ITEM)<ItemType>();
export const addItemSuccess = createAction(ADD_ITEM_SUCCESS)<ItemResponse>();
export const addItemFailure = createAction(ADD_ITEM_FAILURE)<Error>();

export const updateItem = createAction(UPDATE_ITEM)<ItemUpdate>();
export const updateItemSuccess = createAction(UPDATE_ITEM_SUCCESS)<
  ItemResponse
>();
export const updateItemFailure = createAction(UPDATE_ITEM_FAILURE)<Error>();

// Create Saga
const addItemSaga = createSaga(ADD_ITEM, itemsAPI.addItem);
const updateItemSaga = createSaga(UPDATE_ITEM, itemsAPI.updateItem);

export function* addSaga() {
  yield takeLatest(ADD_ITEM, addItemSaga);
  yield takeLatest(UPDATE_ITEM, updateItemSaga);
}

const actions = {
  initialize,
  changeField,
  setOriginalItem,
  addItem,
  addItemSuccess,
  addItemFailure,
  updateItem,
  updateItemSuccess,
  updateItemFailure,
};

type AddAction = ActionType<typeof actions>;

const initialState: AddState = {
  name: '',
  native: '현역',
  divide: '식사(뷔페)',
  unit: '',
  price: 0,
  item: null,
  error: null,
  originalItemId: null,
};

// Reducer
const add = createReducer<AddState, AddAction>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [SET_ORIGINAL_ITEM]: (state, { payload: item }) => ({
    ...state,
    name: item.name,
    native: item.native,
    divide: item.divide,
    unit: item.unit,
    price: item.price,
    originalItemId: item._id,
  }),
  [ADD_ITEM_SUCCESS]: (state, { payload: item }) => ({
    ...state,
    item,
  }),
  [ADD_ITEM_FAILURE]: (state, { payload: error }) => ({
    ...state,
    item: null,
    error,
  }),
  [UPDATE_ITEM_SUCCESS]: (state, { payload: item }) => ({
    ...state,
    item,
  }),
  [UPDATE_ITEM_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
});

export default add;
