import {Text, View} from 'react-native';
import {localizationInit, useLocalization} from './hooks/localization.ts';
import {useEffect, useState} from 'react';

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

  return <View></View>;
}
