import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import loading from './loading';
import user, { userSaga } from './user';
import auth, { authSaga } from './auth';
import menu, { menuSaga } from './menu';
import bills, { billsSaga } from './bills';
import fronts, { frontsSaga } from './fronts';
import weddings, { weddingsSaga } from './weddings';
import expense, { expenseSaga } from './expense';
import items, { itemsSaga } from './items';
import add, { addSaga } from './add';
import users, { usersSaga } from './users';

const rootReducer = combineReducers({
  loading,
  user,
  auth,
  menu,
  bills,
  fronts,
  weddings,
  expense,
  items,
  add,
  users,
});

export function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
    menuSaga(),
    billsSaga(),
    frontsSaga(),
    weddingsSaga(),
    expenseSaga(),
    itemsSaga(),
    addSaga(),
    usersSaga(),
  ]);
}

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
