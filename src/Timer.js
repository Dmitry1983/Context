import React, {useContext} from 'react';
import {View} from 'react-native';
import {ContextApp} from './reducer';

export function Timer() {
  // Используем функцию useContext для получения контекста ContextApp
  // Компонент IndexComponent должен быть обязательно обернут в ContextApp.Provider
  const {state, dispatch} = useContext(ContextApp);

  const createAccount = () => {
    try {
      dispatch({type: 'setAdd'});
    } catch (e) {
      // handle error here
    }
  };

  return createAccount();
}
