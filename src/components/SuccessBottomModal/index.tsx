import {BottomModal} from '../BottomModal';
import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style.ts';
import {SuccessIcon} from '../../assets/icons';
import {useLocalization} from '../../hooks/localization.ts';

interface SuccessBottomModalProps {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function SuccessBottomModal(props: SuccessBottomModalProps) {
  const {isVisible, setIsVisible} = props;
  const {t} = useLocalization();

  return (
    <BottomModal isVisible={isVisible} setIsVisible={setIsVisible}>
      <View style={styles.container}>
        <View style={styles.successIconContainer}>
          <SuccessIcon style={styles.successIcon} />
        </View>
        <Text style={styles.successText}>{t('SUCCESS_MODAL.MESSAGE')}</Text>
      </View>
    </BottomModal>
  );
}
