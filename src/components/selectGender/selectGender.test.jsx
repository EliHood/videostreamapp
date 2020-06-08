import React from 'react';
import {
  fireEvent,
  render,
  NativeTestEvent,
} from '@testing-library/react-native';
import SelectGender from './selectGender';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
describe('selectGender component', () => {
  const props = {
    user: {
      gender: '',
    },
  };
  test('should render selectGender component', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectGender {...props} />
      </Provider>,
    );
    expect(getByTestId('test-data-gender')).toBeTruthy();
  });

  test('should test selectGender header', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectGender {...props} />
      </Provider>,
    );
    expect(getByTestId('test-data-gender-header')).toBeTruthy();
    expect(getByTestId('test-data-gender-header').props.children).toBe(
      'Select Gender',
    );
  });

  test('should test radio value 1', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectGender {...props} />
      </Provider>,
    );
    expect(getByTestId('test-data-gender-radio1')).toBeTruthy();
  });

  test('should test radio value 2', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectGender {...props} />
      </Provider>,
    );
    expect(getByTestId('test-data-gender-radio2')).toBeTruthy();
  });
  test('should render button', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectGender {...props} />
      </Provider>,
    );

    expect(getByTestId('test-data-gender-button')).toBeTruthy();
  });
});
