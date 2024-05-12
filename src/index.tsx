import {localizationInit} from './hooks/localization.ts';
import React, {useEffect, useState} from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import {AppNavigator} from './navigation/app-navigation.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import 'react-native-gesture-handler';

export function App() {
  const [isI18nLoad, setIsI18nLoad] = useState(false);

  useEffect(() => {
    if (isI18nLoad) {
      return;
    }
    localizationInit().then(() => {
      setIsI18nLoad(true);
    });
  }, [isI18nLoad]);

  if (!isI18nLoad) {
    return null;
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
