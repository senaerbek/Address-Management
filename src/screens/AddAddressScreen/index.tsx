import {ScrollView, Text, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {styles} from './style';
import {HeaderComponent} from '../../components/HeaderComponent';
import {useLocalization} from '../../hooks/localization';
import {TextInputComponent} from '../../components/InputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {DropdownComponent} from '../../components/DropdownComponent';
import {getCities} from '../../api/services/city-service.ts';
import {addAddress} from '../../api/services/address-service.ts';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function AddAddressScreen() {
  const {t} = useLocalization();
  const dispatch = useDispatch<AppDispatch>();
  const {bottom} = useSafeAreaInsets();
  const cities = useSelector((state: RootState) => state.cities.cities);

  const citiesForDropdown = useMemo(() => {
    return cities.map(city => {
      return {
        label: city.name,
        value: city.name,
      };
    });
  }, [cities]);

  useEffect(() => {
    dispatch(getCities());
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
      <ScrollView style={styles.body} showsVerticalScrollIndicator={false}>
        <TextInputComponent
          style={styles.inputContainer}
          label={t('ADD_ADDRESS_SCREEN.ADDRESS_INPUT')}
        />
        <TextInputComponent
          style={styles.inputContainer}
          label={t('ADD_ADDRESS_SCREEN.CITY_INPUT')}
        />
        <DropdownComponent
          label={t('ADD_ADDRESS_SCREEN.DETAIL_INPUT')}
          data={citiesForDropdown}
          onChange={(value: any) => {
            console.log(value);
          }}
          labelField={'label'}
          valueField={'value'}
        />
      </ScrollView>
      <View style={styles.divider} />
      <ButtonComponent
        style={[
          styles.buttonContainer,
          {
            marginBottom: bottom,
          },
        ]}
        title={t('ADD_ADDRESS_SCREEN.SAVE_BUTTON')}
        onPress={() => {
          //todo dispatch addAddress
        }}
      />
    </View>
  );
}
