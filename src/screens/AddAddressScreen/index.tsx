import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../HomeScreen/style';
import {HeaderComponent} from '../../components/HeaderComponent';
import {useLocalization} from '../../hooks/localization';

export function AddAddressScreen() {
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
