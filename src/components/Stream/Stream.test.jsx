import React from 'react';
import {
  fireEvent,
  render,
  NativeTestEvent,
} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '../../store/store';
import Stream from './Stream';
describe('<Stream/> components', () => {
  test('should render <Stream/>', () => {
    const {getByTestId} = render(
      <Provider store={store}>
        <Stream />
      </Provider>,
    );
    expect(getByTestId('data-test-stream')).toBeTruthy();
  });
});
