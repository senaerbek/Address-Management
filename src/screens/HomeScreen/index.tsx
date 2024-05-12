import React from 'react';
import {Text, View} from 'react-native';
import {HeaderComponent} from '../../components/HeaderComponent';
import {styles} from './style.ts';

export function HomeScreen() {
  return (
    <View>
      <HeaderComponent
        title="Adreslerim"
        children={<Text style={styles.moduleTitle}>Adres Bilgilerin</Text>}
      />
    </View>
  );
}
