import React, {useContext} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ContextApp} from './reducer';

export const ButtonAdd = () => {
  const {state, dispatch} = useContext(ContextApp);
  return (
    <View>
      <TouchableOpacity
        style={{height: 50, width: '100%', backgroundColor: 'grey'}}
        onPress={() => {
          dispatch({
            type: 'setAdd',
          });
        }}>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{color: 'white', fontSize: 18}}>
            TouchablePressButton
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
