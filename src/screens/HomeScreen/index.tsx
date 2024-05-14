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
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/app-navigation.tsx';
import {DividerComponent} from '../../components/DividerComponent';

export function HomeScreen() {
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
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
      <View
        style={[
          styles.body,
          {
            marginBottom: bottom,
          },
        ]}>
        <AddressTableComponent addressList={addresses} />
      </View>
      <DividerComponent />
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
