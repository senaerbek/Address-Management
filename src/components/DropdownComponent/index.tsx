import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import {styles} from './style.ts';

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownComponentProps<T> extends DropdownProps<T> {
  label: string;
  onChange: (item: T) => void;
  style?: any;
}

export function DropdownComponent<T>(props: DropdownComponentProps<T>) {
  const {label, style, onChange, ...restOfProps} = props;
  const [value, setValue] = useState<DropdownItem | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const focusAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const focusAnimationConfig = Animated.timing(focusAnimation, {
      toValue: value || isFocused ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    });

    const scaleAnimConfig = Animated.timing(scaleAnimation, {
      toValue: isFocused || value ? 1 : 1.27,
      duration: 150,
      useNativeDriver: true,
    });

    const colorAnimConfig = Animated.timing(colorAnimation, {
      toValue: isFocused || value ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    });

    Animated.parallel([
      focusAnimationConfig,
      scaleAnimConfig,
      colorAnimConfig,
    ]).start();
  }, [focusAnimation, isFocused, value]);

  const scale = focusAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.75],
  });

  const translateX = focusAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [16, 0],
  });

  const translateY = focusAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [24, 0],
  });

  const textColor = colorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#7D8E9F', '#6F6085'],
  });

  return (
    <View style={style}>
      <Dropdown
        {...restOfProps}
        style={[styles.dropdown]}
        search
        labelField="label"
        valueField="value"
        placeholder={''}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={item => {
          onChange(item);
          setValue(item);
        }}
      />
      <TouchableWithoutFeedback onPress={() => setIsFocused(true)}>
        <Animated.View
          style={[
            styles.labelContainer,
            {
              transform: [
                {
                  scale,
                },
                {
                  translateY,
                },
                {
                  translateX,
                },
              ],
            },
          ]}>
          <Animated.Text
            style={[
              styles.label,
              {
                transform: [{scale: scaleAnimation}],
                color: textColor,
              },
            ]}>
            {label}
          </Animated.Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
