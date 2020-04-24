import { createAction, createReducer, ActionType } from 'typesafe-actions';

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(START_LOADING)<string>();

export const finishLoading = createAction(FINISH_LOADING)<string>();

type LoadingState = {
  [key: string]: boolean;
};

const actions = { startLoading, finishLoading };

type LoadingAction = ActionType<typeof actions>;

const initialState: LoadingState = {};

const loading = createReducer<LoadingState, LoadingAction>(initialState, {
  [START_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: true,
  }),
  [FINISH_LOADING]: (state, action) => ({
    ...state,
    [action.payload]: false,
  }),
});

export default loading;
