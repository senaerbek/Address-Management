import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style.ts';

interface ButtonComponentProps {
  title: string;
  onPress?: () => void;
  style?: any;
}

export function ButtonComponent(props: ButtonComponentProps) {
  const {title, style, onPress} = props;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
