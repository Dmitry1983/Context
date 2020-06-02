import React, {useContext} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {ContextApp} from './reducer';
import {Timer} from './Timer';

export const ButtonAdd = () => {
  const {state, dispatch} = useContext(ContextApp);
  const {touchable, view, text} = styles;
  const plusOne = () => {
    try {
      dispatch({type: 'setAdd'});
    } catch (e) {
      // handle error here
      console.log(e);
    }
  };
  //setInterval(plusOne, 1000);
  return (
    <View>
      <TouchableOpacity
        style={touchable}
        onPress={() => plusOne()}
        // onPress={() => {
        //   dispatch({
        //     type: 'setAdd',
        //   });
        // }}
      >
        <View style={view}>
          <Text style={text}>TouchablePressButton</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  touchable: {
    height: 50,
    width: '100%',
    backgroundColor: 'grey',
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});
