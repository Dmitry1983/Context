import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ContextApp} from './reducer';
import {Timer} from './Timer';

export const AddFunction = () => {
  const {state, dispatch} = useContext(ContextApp);

  const plusOne = () => {
    try {

      dispatch({type: 'setAdd'});
    } catch (e) {
      // handle error here
      console.log( e)
    }
  };
  setInterval(plusOne, 1000);
};
