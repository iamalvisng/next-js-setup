import { Reducer, useCallback, useReducer } from 'react';

const UPDATE = 'UPDATE';

type Action<T> = {
  type: typeof UPDATE;
  payload: T;
};

type State<T> = T;

const reducer = <T>(state: State<T>, action: Action<T>) => {
  switch (action.type) {
    case UPDATE:
      return { ...state, ...action.payload };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

function useStateReducer<T>(initialState: T): [T, (payload: T) => void] {
  const [state, dispatch] = useReducer<Reducer<State<T>, Action<T>>>(reducer, initialState);

  const updateState = useCallback((payload: T) => dispatch({ type: UPDATE, payload }), []);

  return [state, updateState];
}

export { useStateReducer };
