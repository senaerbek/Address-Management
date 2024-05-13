import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style.ts';

interface ButtonComponentProps {
  title: string;
  onPress?: () => void;
}

export function ButtonComponent(props: ButtonComponentProps) {
  const {title, onPress} = props;

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
