import * as actions from './userActions';

describe('should test user actions', () => {
  test('should test gender action', () => {
    const payload = {
      data: 'Male',
    };
    const exepectedAction = {
      type: 'SET_GENDER',
      data: payload,
    };

    expect(actions.setGender(payload)).toEqual(exepectedAction);
  });
  test('should test age action', () => {
    const payload = {
      data: 18,
    };
    const exepectedAction = {
      type: 'SET_AGE',
      data: payload,
    };

    expect(actions.setAge(payload)).toEqual(exepectedAction);
  });
});
