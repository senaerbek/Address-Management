import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style.ts';
import {ArrowLeftIcon, ArrowRightIcon, LocationIcon} from '../../assets/icons';
import {Address} from '../../models/address.ts';

interface AddressRowComponentProps {
  address: Address;
}

export function AddressRowComponent(props: AddressRowComponentProps) {
  const {address} = props;

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconCircle}>
          <LocationIcon style={styles.locationIcon} />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle} numberOfLines={2}>
          {address.title}
        </Text>
        <Text style={styles.infoDetail} numberOfLines={1}>
          {address.detail}
        </Text>
      </View>
      <View style={styles.cityDetailContainer}>
        <Text style={styles.cityDetail}>{address.city}</Text>
      </View>
      <TouchableOpacity style={styles.navigationIconContainer}>
        <ArrowRightIcon style={styles.arrowIcon} />
      </TouchableOpacity>
    </View>
  );
}
