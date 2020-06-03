import React, { useContext } from 'react';
import { View, Button, Text, StyleSheet, TextInput } from 'react-native';
import { ContextApp } from './reducer';

function Separator() {
  return <View style={styles.separator} />;
}

export function IndexComponent() {
  // Используем функцию useContext для получения контекста ContextApp
  // Компонент IndexComponent должен быть обязательно обернут в ContextApp.Provider
  const { state, dispatch } = useContext(ContextApp);
  const { text, view } = styles;

  const inputTextToContext = value => {
    dispatch({
      type: 'AddSettings',
      payload: {
        newVar: value,
      },
    });
  };

  const addCounter = () => {
    dispatch({
      type: 'setAdd',
    });
  };

  return (
    // Используя dispatch мы попадаем в reducer.js в метод testReducer
    // // который и обновляет состояние. Все как в Redux
    <View>
      <Text style={text}>{JSON.stringify(state)}</Text>
      <Separator />
      <View style={view} />
      <Button
        title="Press Me"

        onPress={() => {
          dispatch({
            type: 'setTest',
            payload: {
              test: 'hello world',
            },
          });
        }}
      />
      <Text style={text}>{test}</Text>
      <View style={view} />
      <Button title="Add press" style={button} onPress={() => addCounter()} />
      <Text style={text}>{JSON.stringify(press)}</Text>
      <Separator />
      <TextInput
        placeholder="Enter text"
        onChangeText={value => inputTextToContext(value)}
      />
      <Button
        title="Submit text"

        onPress={() => {
          inputTextToContext('press btn');
        }}
      />
      <Separator />
      <Text style={text}>{newVar}</Text>
      <ButtonAdd />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    textAlign: 'center',
  },
  view: {
    height: 50,
  },
  separator: {
    marginVertical: 16,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
