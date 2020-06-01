import React, {useReducer} from 'react';
import {ContextApp, initialState, testReducer} from './src/reducer';
import {IndexComponent} from './src/IndexComponent';
import {Timer} from './src/Timer';
import {ButtonAdd} from './src/ButtonAdd';

const App = () => {
  // Инициализируем reducer и получаем state + dispatch для записи
  const [state, dispatch] = useReducer(testReducer, initialState);

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     Timer();
  //   }, 3000);

  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    // Для того, чтобы мы могли использовать reducer в компонентах
    // Воспользуемся ContextApp и передадим (dispatch и state)
    // в компоненты ниже по иерархии

    <ContextApp.Provider value={{dispatch, state}}>
      <IndexComponent />
      <ButtonAdd />
    </ContextApp.Provider>
  );
};

export default App;
