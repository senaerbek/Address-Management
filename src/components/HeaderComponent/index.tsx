import React, {useCallback} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColors, styles} from './style.ts';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ArrowLeftIcon, LanguageIcon} from '../../assets/icons';
import {useLocalization} from '../../hooks/localization.ts';
import {StackNavigationProp} from '@react-navigation/stack';
import {StackParamList} from '../../navigation/app-navigation.tsx';
import {useNavigation} from '@react-navigation/native';

interface HeaderComponentProps {
  title: string;
  children: React.ReactNode;
}

export function HeaderComponent(props: HeaderComponentProps) {
  const {title, children} = props;
  const navigation = useNavigation<StackNavigationProp<StackParamList>>();
  const {changeLanguage, currentLanguage} = useLocalization();
  const {top} = useSafeAreaInsets();

  const navigateBack = useCallback(() => {
    navigation.goBack();
  }, []);

  const changeCurrentLanguage = useCallback(() => {
    changeLanguage(currentLanguage === 'en' ? 'tr' : 'en');
  }, [currentLanguage]);

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
          <TouchableOpacity onPress={navigateBack} style={styles.iconView}>
            <ArrowLeftIcon style={styles.iconStyle} />
          </TouchableOpacity>
          <View style={styles.titleView}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <TouchableOpacity
            onPress={changeCurrentLanguage}
            style={styles.languageIconView}>
            <LanguageIcon style={styles.iconStyle} />
          </TouchableOpacity>
        </View>
        <View style={styles.childrenContainer}>{children}</View>
      </View>
    </LinearGradient>
  );
}
