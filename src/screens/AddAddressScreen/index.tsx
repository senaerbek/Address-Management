import {ScrollView, Text, View} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {styles} from './style';
import {HeaderComponent} from '../../components/HeaderComponent';
import {useLocalization} from '../../hooks/localization';
import {TextInputComponent} from '../../components/InputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {
  DropdownComponent,
  DropdownItem,
} from '../../components/DropdownComponent';
import {getCities} from '../../api/services/city-service.ts';
import {addAddress} from '../../api/services/address-service.ts';
import {ButtonComponent} from '../../components/ButtonComponent';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Formik} from 'formik';
import {Address} from '../../models/address.ts';
import * as Yup from 'yup';
import {SuccessBottomModal} from '../../components/SuccessBottomModal';
import {useNavigation} from '@react-navigation/native';

export function AddAddressScreen() {
  const {t} = useLocalization();
  const dispatch = useDispatch<AppDispatch>();
  const navigation = useNavigation();
  const {bottom} = useSafeAreaInsets();
  const cities = useSelector((state: RootState) => state.cities.cities);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      title: Yup.string().required(
        t('ADD_ADDRESS_SCREEN.ADDRESS_INPUT_REQUIRED'),
      ),
      city: Yup.string().required(t('ADD_ADDRESS_SCREEN.CITY_INPUT_REQUIRED')),
      detail: Yup.string().required(
        t('ADD_ADDRESS_SCREEN.DETAIL_INPUT_REQUIRED'),
      ),
    });
  }, []);

  const citiesForDropdown = useMemo(() => {
    return cities.map(city => {
      return {
        label: city.name,
        value: city.name,
      };
    });
  }, [cities]);

  const onSavePressed = useCallback((values: Partial<Address>) => {
    dispatch(addAddress(values)).then(() => {
      setIsModalVisible(true);
    });
  }, []);

  useEffect(() => {
    const handleModal = async () => {
      if (isModalVisible) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        navigation.goBack();
      }
    };

    handleModal();
  }, [isModalVisible]);

  useEffect(() => {
    dispatch(getCities());
  }, []);

  return (
    <View style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={{title: '', city: '', detail: ''}}
        onSubmit={onSavePressed}>
        {({
          handleChange,
          handleSubmit,
          setFieldValue,
          dirty,
          isSubmitting,
          errors,
          touched,
        }) => (
          <>
            <HeaderComponent
              title={t('HOME_SCREEN.MY_ADDRESSES')}
              children={
                <Text style={styles.moduleTitle}>
                  {t('HOME_SCREEN.YOUR_ADDRESS_INFO')}
                </Text>
              }
            />
            <ScrollView
              style={styles.body}
              showsVerticalScrollIndicator={false}>
              <TextInputComponent
                style={styles.inputContainer}
                label={t('ADD_ADDRESS_SCREEN.ADDRESS_INPUT')}
                onChangeText={handleChange('title')}
                error={errors.title && touched.title ? errors.title : undefined}
              />
              <TextInputComponent
                style={styles.inputContainer}
                label={t('ADD_ADDRESS_SCREEN.CITY_INPUT')}
                onChangeText={handleChange('city')}
                error={errors.city && touched.city ? errors.city : undefined}
              />
              <DropdownComponent
                label={t('ADD_ADDRESS_SCREEN.DETAIL_INPUT')}
                data={citiesForDropdown}
                onChange={({value}: DropdownItem) => {
                  setFieldValue('detail', value);
                }}
                labelField={'label'}
                valueField={'value'}
                error={
                  errors.detail && touched.detail ? errors.detail : undefined
                }
              />
            </ScrollView>
            <View style={styles.divider} />
            <ButtonComponent
              disabled={!dirty || isSubmitting}
              style={[
                styles.buttonContainer,
                {
                  marginBottom: bottom,
                },
              ]}
              title={t('ADD_ADDRESS_SCREEN.SAVE_BUTTON')}
              onPress={() => {
                handleSubmit();
              }}
            />
          </>
        )}
      </Formik>
      <SuccessBottomModal
        isVisible={isModalVisible}
        setIsVisible={setIsModalVisible}
      />
    </View>
  );
}
