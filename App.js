import React, {useReducer, useEffect, useCallback} from 'react';
import {ContextApp, initialState, testReducer} from './src/reducer';
import {IndexComponent} from './src/IndexComponent';

const App = () => {
  // Инициализируем reducer и получаем state + dispatch для записи
  const [state, dispatch] = useReducer(testReducer, initialState);

  const addCounter = useCallback(() => {
    dispatch({
      type: 'setAdd',
    });
  });

  useEffect(() => {
    const timer = setInterval(() => {
      addCounter();
    }, 1000);

    return () => clearInterval(timer);
  }, [addCounter]);

  let content = <IndexComponent />;

  return (
    // Для того, чтобы мы могли использовать reducer в компонентах
    // Воспользуемся ContextApp и передадим (dispatch и state)
    // в компоненты ниже по иерархии

    <ContextApp.Provider value={{dispatch, state}}>
      {content}
    </ContextApp.Provider>
  );
};

export default App;
