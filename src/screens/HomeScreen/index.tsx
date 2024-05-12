import React from 'react';
import {Text, View} from 'react-native';
import {HeaderComponent} from '../../components/HeaderComponent';
import {styles} from './style.ts';
import {useLocalization} from '../../hooks/localization.ts';

export function HomeScreen() {
  const {t} = useLocalization();

  return (
    <View>
      <HeaderComponent
        title={t('HOME_SCREEN.MY_ADDRESSES')}
        children={
          <Text style={styles.moduleTitle}>
            {t('HOME_SCREEN.YOUR_ADDRESS_INFO')}
          </Text>
        }
      />
    </View>
  );
}
