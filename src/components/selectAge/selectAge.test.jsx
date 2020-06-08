import React from 'react';
import {
  fireEvent,
  render,
  NativeTestEvent,
} from '@testing-library/react-native';
import SelectAge from './selectAge';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
describe('selectAge component', () => {
  test('should render selectAge component', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );
    expect(getByTestId('test-data-age')).toBeTruthy();
  });
  test('should render selectAge header', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );
    expect(getByTestId('test-data-age-header')).toBeTruthy();
  });

  test('should render slider', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );
    expect(getByTestId('test-slider')).toBeTruthy();
  });

  test('should render button', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );

    expect(getByTestId('test-data-age-button')).toBeTruthy();
  });

  test('should test button onPress', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );
    fireEvent.press(
      getByTestId('test-data-age-button'),
      new NativeTestEvent('press'),
    );
  });

  test('should test slider onChange', () => {
    const mockValue = {
      age: 22,
    };
    const {getByTestId} = render(
      <Provider store={store}>
        <SelectAge />
      </Provider>,
    );
    fireEvent.change(getByTestId('test-slider'), {
      nativeEvent: {age: mockValue.age},
    });
  });
});
