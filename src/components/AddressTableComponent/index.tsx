import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {AddressRowComponent} from '../AddressRowComponent';
import {Address} from '../../models/address.ts';
import {styles} from './style.ts';
import {useLocalization} from '../../hooks/localization.ts';

interface AddressTableComponentProps {
  addressList: Address[];
}

export function AddressTableComponent(props: AddressTableComponentProps) {
  const {addressList} = props;
  const {t} = useLocalization();

  return (
    <View style={styles.container}>
      <Text style={styles.tableTitle}>{t('ADDRESS_TABLE.TITLE')}</Text>
      <View style={styles.tableContainer}>
        <FlatList
          data={addressList}
          renderItem={({item, index}) => (
            <>
              <AddressRowComponent address={item} />
              {index !== addressList.length - 1 ? (
                <View style={styles.divider} />
              ) : null}
            </>
          )}
        />
      </View>
    </View>
  );
}
