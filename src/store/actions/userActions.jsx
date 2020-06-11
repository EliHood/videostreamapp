import PropTypes from 'prop-types';
export const setGender = data => ({
  type: 'SET_GENDER',
  data,
});

export const setAge = data => ({
  type: 'SET_AGE',
  data,
});
