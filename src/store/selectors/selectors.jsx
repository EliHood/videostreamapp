import {createSelector} from 'reselect';
// calling educer postInitialState, so it will have access to initialState properties
const userSelector = state => state.user;

export const getGender = () =>
  createSelector(
    userSelector,
    state => state.gender,
  );

export const getAge = () =>
  createSelector(
    userSelector,
    state => state.age,
  );
