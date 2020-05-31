import React, {useReducer} from 'react';
import {View} from 'react-native';
import {ContextApp, initialState, testReducer} from './src/reducer';
import {IndexComponent} from './src/IndexComponent';

const App = () => {
  // Инициализируем reducer и получаем state + dispatch для записи
  const [state, dispatch] = useReducer(testReducer, initialState);

  return (
    // Для того, чтобы мы могли использовать reducer в компонентах
    // Воспользуемся ContextApp и передадим (dispatch и state)
    // в компоненты ниже по иерархии

    <ContextApp.Provider value={{dispatch, state}}>
      <IndexComponent />
    </ContextApp.Provider>
  );
};

export default App;
