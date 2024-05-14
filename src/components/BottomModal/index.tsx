import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {styles} from './style.ts';

interface BottomModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

export function BottomModal(props: BottomModalProps) {
  const {children, isVisible, setIsVisible} = props;

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={() => setIsVisible(false)}>
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
}
