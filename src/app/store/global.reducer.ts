import { createFeature, createReducer, on } from '@ngrx/store';

import { globalActionsGroup } from './global.actions';

export const globalStateFeatureKey = "global";

export interface IGlobalState {
  userId: number;
};

export const initialState : IGlobalState = {
  userId: -1
}

export const globalFeature = createFeature({
  name: globalStateFeatureKey,
  reducer: createReducer(
    initialState,
    on(globalActionsGroup.loginSuccess, 
      (state: IGlobalState, { userId }) => ({...state, userId : userId})
    )
  )
})