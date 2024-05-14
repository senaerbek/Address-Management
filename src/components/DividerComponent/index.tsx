import React from 'react';
import {View} from 'react-native';
import {styles} from './style.ts';

interface DividerComponentProps {
  style?: object;
}

export function DividerComponent(props: DividerComponentProps) {
  const {style} = props;

  return <View style={[styles.divider, style]} />;
}
