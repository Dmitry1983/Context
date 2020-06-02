import React, {useReducer, useCallback, useEffect} from 'react';
import { Button } from 'react-native'
import {ContextApp, initialState, testReducer} from './src/reducer';
import {IndexComponent} from './src/IndexComponent'

const App = (  ) => {
  // Инициализируем reducer и получаем state + dispatch для записи
  const [state, dispatch] = useReducer(testReducer, initialState);

  const addCounter = useCallback(() => {
    dispatch({
      type: 'setAdd',
    });
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      addCounter();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [addCounter]);

  let content = <IndexComponent />

  return (
    // Для того, чтобы мы могли использовать reducer в компонентах
    // Воспользуемся ContextApp и передадим (dispatch и state)
    // в компоненты ниже по иерархии

    <ContextApp.Provider value={{dispatch, state}}>
      {content }

    </ContextApp.Provider>
  );
};

export default App;
