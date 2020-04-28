import { createAction, createReducer, ActionType } from 'typesafe-actions';
import { takeLatest } from 'redux-saga/effects';
import createSaga from '../createSaga';
import * as usersAPI from '../api/users';
import { AuthResponse } from '../api/auth';

// Action Types
const LIST_USERS = 'users/LIST_USERS';
const LIST_USERS_SUCCESS = 'users/LIST_USERS_SUCCESS';
const LIST_USERS_FAILURE = 'users/LIST_USERS_FAILURE';
const READ_USER = 'users/READ_USER';
const READ_USER_SUCCESS = 'users/READ_USER_SUCCESS';
const READ_USER_FAILURE = 'users/READ_USER_FAILURE';
const UNLOAD_USER = 'users/UNLOAD_USER';

// Typing
type ListType = {
  page: string | number;
  username: string;
};

type UsersState = {
  users: AuthResponse[] | null;
  error: Error | null;
  lastPage: number | string;
  user: AuthResponse | null;
};

// Action Creators
export const listUsers = createAction(
  LIST_USERS,
  ({ page, username }: ListType) => ({ page, username })
)<ListType>();
export const listUsersSuccess = createAction(LIST_USERS_SUCCESS)<
  AuthResponse[]
>();
export const listUsersFailure = createAction(LIST_USERS_FAILURE)<Error>();

export const readUser = createAction(READ_USER)<string>();
export const readUserSuccess = createAction(READ_USER_SUCCESS)<AuthResponse>();
export const readUserFailure = createAction(READ_USER_FAILURE)<Error>();

export const unloadUser = createAction(UNLOAD_USER)<void>();

// Create Saga
const listUsersSaga = createSaga(LIST_USERS, usersAPI.listUsers);
const readUserSaga = createSaga(READ_USER, usersAPI.readUser);

export function* usersSaga() {
  yield takeLatest(LIST_USERS, listUsersSaga);
  yield takeLatest(READ_USER, readUserSaga);
}

const actions = {
  listUsers,
  listUsersSuccess,
  listUsersFailure,
  readUser,
  readUserSuccess,
  readUserFailure,
  unloadUser,
};

type UsersAction = ActionType<typeof actions>;

const initialState: UsersState = {
  users: [],
  error: null,
  lastPage: 1,
  user: null,
};

// Reducer
const items = createReducer<UsersState, UsersAction>(initialState, {
  // @ts-ignore
  [LIST_USERS_SUCCESS]: (state, { payload: users, meta: response }) => ({
    ...state,
    users,
    lastPage: parseInt(response.headers['last-page'], 10),
  }),
  [LIST_USERS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    users: null,
    error,
  }),
  [READ_USER_SUCCESS]: (state, { payload: user }) => ({
    ...state,
    user,
  }),
  [READ_USER_FAILURE]: (state, { payload: error }) => ({
    ...state,
    user: null,
    error,
  }),
  [UNLOAD_USER]: () => initialState,
});

export default items;
