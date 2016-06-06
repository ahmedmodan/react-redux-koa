import counterState from '../states/counterState';

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_ASYNC = 'ADD_ASYNC';

export function increment(value = 1) {
  return { type: INCREMENT,
           value };
}

export function decrement(value = 1) {
  return { type: DECREMENT,
           value };
}

export function addAsync() {
  return (dispatch) => fetch('/asyncAdd')
      .then((response) => response.text())
      .then((asyncNum) => dispatch(increment(parseInt(asyncNum, 10))));
}

export const actions = {
  increment,
  decrement,
  addAsync
};


export default function counterReducer(state = counterState, action) {
  switch (action.type) {
    case INCREMENT:
      return state.set('counter', state.get('counter') + action.value);
    case DECREMENT:
      return state.set('counter', state.get('counter') - action.value);
    default:
      return state;
  }
}
