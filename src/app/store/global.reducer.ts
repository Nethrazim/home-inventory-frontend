import { createReducer, on } from '@ngrx/store';

import { globalActionsGroup } from './global.actions';

export const globalStateFeatureKey = "globalStateFeatureKey";

export interface IGlobalState {
  userId: number;
};

export const initialState : IGlobalState = {
  userId: -1
}

export const globalReducer = createReducer(
  initialState,
  on(globalActionsGroup.loginSuccess, 
    (state: IGlobalState, { userId }) => ({...state, userId : userId})
  )
);