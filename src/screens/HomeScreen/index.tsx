import React, {useCallback, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HeaderComponent} from '../../components/HeaderComponent';
import {styles} from './style.ts';
import {useLocalization} from '../../hooks/localization.ts';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {getAddresses} from '../../api/services/address-service.ts';
import {AddressTableComponent} from '../../components/AddressTableComponent';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const {t} = useLocalization();
  const {addresses} = useSelector((state: RootState) => state.addresses);

  const navigateToAddAddressScreen = useCallback(() => {
    navigation.navigate('AddAddress');
  }, []);

  useEffect(() => {
    dispatch(getAddresses());
  }, []);

  return (
    <View style={styles.container}>
      <HeaderComponent
        title={t('HOME_SCREEN.MY_ADDRESSES')}
        children={
          <Text style={styles.moduleTitle}>
            {t('HOME_SCREEN.YOUR_ADDRESS_INFO')}
          </Text>
        }
      />
      <View style={styles.body}>
        <AddressTableComponent addressList={addresses} />
      </View>
      <View
        style={[
          styles.buttonContainer,
          {
            marginBottom: bottom,
          },
        ]}>
        <ButtonComponent
          title={t('HOME_SCREEN.ADD_NEW_ADDRESS')}
          onPress={navigateToAddAddressScreen}
        />
      </View>
    </View>
  );
}
