import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColors, styles} from './style.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeftIcon} from '../../assets/icons';

interface HeaderComponentProps {
  title: string;
  children: React.ReactNode;
}

export function HeaderComponent(props: HeaderComponentProps) {
  const {title, children} = props;
  const {top} = useSafeAreaInsets();

  return (
    <LinearGradient colors={gradientColors}>
      <View
        style={[
          styles.container,
          {
            marginTop: top,
          },
        ]}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.iconView}>
            <ArrowLeftIcon style={styles.iconStyle} />
          </TouchableOpacity>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.iconView} />
        </View>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </LinearGradient>
  );
}
