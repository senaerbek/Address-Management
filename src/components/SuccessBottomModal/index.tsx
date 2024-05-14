import {BottomModal} from '../BottomModal';
import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style.ts';
import {SuccessIcon} from '../../assets/icons';

interface SuccessBottomModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function SuccessBottomModal(props: SuccessBottomModalProps) {
  const {isVisible, setIsVisible} = props;

  return (
    <BottomModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={styles.container}>
        <View style={styles.successIconContainer}>
          <SuccessIcon style={styles.successIcon} />
        </View>
        <Text style={styles.successText}>Adresin başarıyla kaydedildi!</Text>
      </View>
    </BottomModal>
  );
}
