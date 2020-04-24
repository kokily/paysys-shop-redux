import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as menuAPI from '../api/menu';
import { QueryType, MenuResponse } from '../api/menu';

// Action Types
const CHANGE_FIELD = 'menu/CHANGE_FIELD';
const LIST_MENU = 'menu/LIST_MENU';
const LIST_MENU_SUCCESS = 'menu/LIST_MENU_SUCCESS';
const LIST_MENU_FAILURE = 'menu/LIST_MENU_FAILURE';
const READ_MENU = 'menu/READ_MENU';
const READ_MENU_SUCCESS = 'menu/READ_MENU_SUCCESS';
const READ_MENU_FAILURE = 'menu/READ_MENU_FAILURE';

// Typing
type FormState = {
  key: string;
  value: string | number;
};

type MenuState = {
  menu: MenuResponse[] | null;
  menuError: Error | null;
  input: MenuResponse | null;
};

// Action Creators
export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: FormState) => ({
    key,
    value,
  })
)<FormState>();

export const listMenu = createAction(LIST_MENU)<QueryType>();
export const listMenuSuccess = createAction(LIST_MENU_SUCCESS)<
  MenuResponse[]
>();
export const listMenuFailure = createAction(LIST_MENU_FAILURE)<Error>();

export const readMenu = createAction(READ_MENU)<string>();
export const readMenuSuccess = createAction(READ_MENU_SUCCESS)<MenuResponse>();
export const readMenuFailure = createAction(READ_MENU_FAILURE)<Error>();

// Create Saga
const listMenuSaga = createSaga(LIST_MENU, menuAPI.listMenu);
const readMenuSaga = createSaga(READ_MENU, menuAPI.readMenu);

export function* menuSaga() {
  yield takeLatest(LIST_MENU, listMenuSaga);
  yield takeLatest(READ_MENU, readMenuSaga);
}

const actions = {
  changeField,
  listMenu,
  listMenuSuccess,
  listMenuFailure,
  readMenu,
  readMenuSuccess,
  readMenuFailure,
};

type MenuAction = ActionType<typeof actions>;

const initialState: MenuState = {
  menu: null,
  menuError: null,
  input: null,
};

// Reducer
const menu = createReducer<MenuState, MenuAction>(initialState, {
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [LIST_MENU_SUCCESS]: (state, { payload: menu }) => ({
    ...state,
    menu,
  }),
  [LIST_MENU_FAILURE]: (state, { payload: error }) => ({
    ...state,
    menu: null,
    menuError: error,
  }),
  [READ_MENU_SUCCESS]: (state, { payload: input }) => ({
    ...state,
    input,
  }),
  [READ_MENU_FAILURE]: (state, { payload: error }) => ({
    ...state,
    input: null,
    menuError: error,
  }),
});

export default menu;
