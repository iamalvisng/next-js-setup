import { createSelector } from '@reduxjs/toolkit';

export const selectCounterReducer = (state: any) => state.counter;

export const selectCounterValue = createSelector(selectCounterReducer, ({ value }) => value);
