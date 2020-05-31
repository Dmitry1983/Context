import React from 'react';

export const ContextApp = React.createContext();

export const initialState = {
  // app: {
  test: 'test_context',
  press: 0,
  // }
};

export const testReducer = (state, action) => {
  switch (action.type) {
    case 'setTest':
      return {
        ...state,
        ...action.payload,
      };
    case 'setAdd':
      return {
        ...state,
        press: state.press + 1,
      };
    case 'AddSettings':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
