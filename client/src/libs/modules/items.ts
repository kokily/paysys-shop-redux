import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as itemsAPI from '../api/items';
import { ItemResponse } from '../api/items';

// Action Types
const LIST_ITEMS = 'items/LIST_ITEMS';
const LIST_ITEMS_SUCCESS = 'items/LIST_ITEMS_SUCCESS';
const LIST_ITEMS_FAILURE = 'items/LIST_ITEMS_FAILURE';
const READ_ITEM = 'items/READ_ITEM';
const READ_ITEM_SUCCESS = 'items/READ_ITEM_SUCCESS';
const READ_ITEM_FAILURE = 'items/READ_ITEM_FAILURE';
const UNLOAD_ITEM = 'items/UNLOAD_ITEM';

// Typing
type ListType = {
  page: string | number;
  name: string;
};

type ItemState = {
  items: ItemResponse[] | null;
  error: Error | null;
  lastPage: number | string;
  item: ItemResponse | null;
};

// Action Creators
export const listItems = createAction(
  LIST_ITEMS,
  ({ page, name }: ListType) => ({ page, name })
)<ListType>();
export const listItemsSuccess = createAction(LIST_ITEMS_SUCCESS)<
  ItemResponse[]
>();
export const listItemsFailure = createAction(LIST_ITEMS_FAILURE)<Error>();

export const readItem = createAction(READ_ITEM)<string>();
export const readItemSuccess = createAction(READ_ITEM_SUCCESS)<ItemResponse>();
export const readItemFailure = createAction(READ_ITEM_FAILURE)<Error>();

export const unloadItem = createAction(UNLOAD_ITEM)<void>();

// Create Saga
const listItemsSaga = createSaga(LIST_ITEMS, itemsAPI.listItems);
const readItemSaga = createSaga(READ_ITEM, itemsAPI.readItem);

export function* itemsSaga() {
  yield takeLatest(LIST_ITEMS, listItemsSaga);
  yield takeLatest(READ_ITEM, readItemSaga);
}

const actions = {
  listItems,
  listItemsSuccess,
  listItemsFailure,
  readItem,
  readItemSuccess,
  readItemFailure,
  unloadItem,
};

type ItemAction = ActionType<typeof actions>;

const initialState: ItemState = {
  items: [],
  error: null,
  lastPage: 1,
  item: null,
};

// Reducer
const items = createReducer<ItemState, ItemAction>(initialState, {
  // @ts-ignore
  [LIST_ITEMS_SUCCESS]: (state, { payload: items, meta: response }) => ({
    ...state,
    items,
    lastPage: parseInt(response.headers['last-page'], 10),
  }),
  [LIST_ITEMS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    items: null,
    error,
  }),
  [READ_ITEM_SUCCESS]: (state, { payload: item }) => ({
    ...state,
    item,
  }),
  [READ_ITEM_FAILURE]: (state, { payload: error }) => ({
    ...state,
    item: null,
    error,
  }),
  [UNLOAD_ITEM]: () => initialState,
});

export default items;
