import React, {useEffect, useRef, useState} from 'react';
import {
  TextInput,
  View,
  Animated,
  Easing,
  TouchableWithoutFeedback,
  TextInputProps,
  Text,
} from 'react-native';
import {styles} from './style.ts';

interface TextInputComponentProps extends TextInputProps {
  label: string;
  style?: any;
  error?: string;
}

export function TextInputComponent(props: TextInputComponentProps) {
  const {label, style, error, ...restOfProps} = props;
  const inputRef = useRef<TextInput>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState('');

  const focusAnimation = useRef(new Animated.Value(0)).current;
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const colorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const focusAnimationConfig = Animated.timing(focusAnimation, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 150,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: true,
    });

    const scaleAnimConfig = Animated.timing(scaleAnimation, {
      toValue: isFocused || value !== '' ? 1 : 1.27,
      duration: 150,
      useNativeDriver: true,
    });

    const colorAnimConfig = Animated.timing(colorAnimation, {
      toValue: isFocused || value !== '' ? 1 : 0,
      duration: 150,
      useNativeDriver: true,
    });

    Animated.parallel([
      focusAnimationConfig,
      scaleAnimConfig,
      colorAnimConfig,
    ]).start();
  }, [focusAnimation, scaleAnimation, isFocused, value]);

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
      <TextInput
        style={styles.input}
        ref={inputRef}
        onChange={e => setValue(e.nativeEvent.text)}
        value={value}
        onBlur={() => {
          setIsFocused(false);
        }}
        onFocus={() => {
          setIsFocused(true);
        }}
        {...restOfProps}
      />
      <TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
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
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}
