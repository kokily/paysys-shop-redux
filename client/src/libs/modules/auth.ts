import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as authAPI from '../api/auth';
import { AuthResponse, UserType } from '../api/auth';

// Action Types
const INITIALIZE = 'auth/INITIALIZE';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

// Typing
type FormState = {
  key: string;
  value: string | number;
};

type AuthState = {
  username: string;
  password: string;
  passwordConfirm: string;
  auth: AuthResponse | null;
  authError: Error | null;
};

// Action Creators
export const initialize = createAction(INITIALIZE)<AuthState>();

export const changeField = createAction(
  CHANGE_FIELD,
  ({ key, value }: FormState) => ({
    key,
    value,
  })
)<FormState>();

export const register = createAction(REGISTER)<UserType>();
export const registerSuccess = createAction(REGISTER_SUCCESS)<AuthResponse>();
export const registerFailure = createAction(REGISTER_FAILURE)<Error>();

export const login = createAction(LOGIN)<UserType>();
export const loginSuccess = createAction(LOGIN_SUCCESS)<AuthResponse>();
export const loginFailure = createAction(LOGIN_FAILURE)<Error>();

// Create Saga
const registerSaga = createSaga(REGISTER, authAPI.register);
const loginSaga = createSaga(LOGIN, authAPI.login);

export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga);
}

const actions = {
  initialize,
  changeField,
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
};

type AuthAction = ActionType<typeof actions>;

const initialState: AuthState = {
  username: '',
  password: '',
  passwordConfirm: '',
  auth: null,
  authError: null,
};

// Reducer
const auth = createReducer<AuthState, AuthAction>(initialState, {
  [INITIALIZE]: (state) => initialState,
  [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
    ...state,
    [key]: value,
  }),
  [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    auth,
  }),
  [REGISTER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    auth: null,
    authError: error,
  }),
  [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
    ...state,
    auth,
  }),
  [LOGIN_FAILURE]: (state, { payload: error }) => ({
    ...state,
    auth: null,
    authError: error,
  }),
});

export default auth;
