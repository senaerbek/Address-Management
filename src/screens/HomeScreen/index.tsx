import React from 'react';
import {Text, View} from 'react-native';
import {HeaderComponent} from '../../components/HeaderComponent';

export function HomeScreen() {
  return (
    <View>
      <HeaderComponent
        title="Adreslerim"
        children={
          <View>
            <Text>Home Screen</Text>
          </View>
        }
      />
    </View>
  );
}
