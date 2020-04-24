import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest, call } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as authAPI from '../api/auth';
import { AuthResponse } from '../api/auth';

// Action Types
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';
const LOGOUT = 'user/LOGOUT';

// Typing
export type UserState = {
  user: AuthResponse | null;
  checkError: Error | null;
};

// Action Creator
export const tempSetUser = createAction(TEMP_SET_USER)<AuthResponse>();

export const check = createAction(CHECK)<void>();
export const checkSuccess = createAction(CHECK_SUCCESS)<AuthResponse>();
export const checkFailure = createAction(CHECK_FAILURE)<Error>();

export const logout = createAction(LOGOUT)<void>();

// Create Saga
const checkSaga = createSaga(CHECK, authAPI.check);

function checkFailureSaga() {
  try {
    localStorage.removeItem('__PAYSYS_AUTH_TOKEN__');
  } catch (err) {
    console.log(`Localstorage is not working: ${err}`);
  }
}

function* logoutSaga() {
  try {
    yield call(authAPI.logout);
    localStorage.removeItem('__PAYSYS_AUTH_TOKEN__');
  } catch (err) {
    console.log(`Localstorage is not working: ${err}`);
  }
}

export function* userSaga() {
  yield takeLatest(CHECK, checkSaga);
  yield takeLatest(CHECK_FAILURE, checkFailureSaga);
  yield takeLatest(LOGOUT, logoutSaga);
}

const actions = { tempSetUser, check, checkSuccess, checkFailure, logout };

type UserAction = ActionType<typeof actions>;

const initialState: UserState = {
  user: null,
  checkError: null,
};

// Reducer
const user = createReducer<UserState, UserAction>(initialState, {
  [TEMP_SET_USER]: (state, { payload: user }) => ({
    ...state,
    user,
  }),
  [CHECK_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user,
  }),
  [CHECK_FAILURE]: (state, { payload: error }) => ({
    ...state,
    checkError: error,
  }),
  [LOGOUT]: (state) => ({
    ...state,
    user: null,
  }),
});

export default user;
