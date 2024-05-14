import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './style.ts';

interface ButtonComponentProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  style?: any;
  disabled?: boolean;
}

export function ButtonComponent(props: ButtonComponentProps) {
  const {title, style, onPress, disabled, ...other} = props;

  return (
    <TouchableOpacity
      {...other}
      style={[
        styles.button,
        style,
        disabled ? styles.disabledButton : undefined,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={[
          styles.buttonText,
          disabled ? styles.disabledButtonText : undefined,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
