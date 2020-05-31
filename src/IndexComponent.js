import React, {useContext} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {ContextApp} from './reducer';

function Separator() {
  return <View style={styles.separator} />;
}

export function IndexComponent() {
  // Используем функцию useContext для получения контекста ContextApp
  // Компонент IndexComponent должен быть обязательно обернут в ContextApp.Provider
  const {state, dispatch} = useContext(ContextApp);
  const {text, button, view} = styles;

  return (
    // Используя dispatch мы попадаем в reducer.js в метод testReducer
    // // который и обновляет состояние. Все как в Redux
    <View>
      <Text style={text}>{JSON.stringify(state)}</Text>
      <Separator />
      <View style={view} />
      <Button
        title="Press Me"
        style={button}
        onPress={() => {
          dispatch({
            type: 'setTest',
            payload: {
              test: 'hello world',
            },
          });
        }}
      />
      <Text style={text}>{state.test}</Text>
      <View style={view} />
      <Button
        title="Add press"
        style={button}
        onPress={() => {
          dispatch({
            type: 'setAdd',
            payload: {
              //
            },
          });
        }}
      />
      <Text style={text}>{JSON.stringify(state.press)}</Text>
      <Button
        title="Press Me"
        style={button}
        onPress={() => {
          dispatch({
            type: 'AddSettings',
            payload: {
              newVar: 123,
            },
          });
        }}
      />
      <Text style={text}>{state.newVar}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  view: {
    height: 75,
  },
  button: {},
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
