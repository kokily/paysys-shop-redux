import { put, call } from 'redux-saga/effects';
import { startLoading, finishLoading } from './modules/loading';
import { AnyAction } from 'redux';

function createSaga(type: string, request: any) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action: AnyAction) {
    yield put(startLoading(type));

    try {
      const response = yield call(request, action.payload);

      yield put({
        type: SUCCESS,
        payload: response.data,
        meta: response,
      });
    } catch (err) {
      yield put({
        type: FAILURE,
        payload: err,
        error: true,
      });
    }

    yield put(finishLoading(type));
  };
}

export default createSaga;
