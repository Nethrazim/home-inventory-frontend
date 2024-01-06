import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IGlobalState, globalStateFeatureKey } from './global.reducer';

export const selectGlobalState = createFeatureSelector<IGlobalState>(
  globalStateFeatureKey
);

export const selectUserId = createSelector(selectGlobalState, (state:IGlobalState) => (state.userId));