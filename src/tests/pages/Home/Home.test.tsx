/**
 * @jest-environment jsdom
 */

import * as redux from 'react-redux';

import { render, screen } from '@testing-library/react';
import Home from '../../../pages/index';

function getState(obj = {}) {
  return {
    counter: { value: 0 },
    ...obj,
  };
}

function mockUseSelector<T>(state: T) {
  jest.spyOn(redux, 'useSelector').mockImplementation((cb) => cb(state));
}

describe('App', () => {
  it('renders without crashing', () => {
    const state = getState();
    mockUseSelector(state);
    const mockDispatch = jest.fn();
    jest.spyOn(redux, 'useDispatch').mockReturnValue(mockDispatch);
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: 'Hello world!' })).toBeInTheDocument();
  });
});
