import {useCallback, useMemo} from 'react';
import {initReactI18next, useTranslation} from 'react-i18next';
import {getLocales} from 'react-native-localize';
import i18n, {Callback} from 'i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function localizationInit() {
    const storedLanguage = await AsyncStorage.getItem('language');
    const deviceLanguage = getLocales()[0].languageCode;
    const i18nLanguage = storedLanguage ?? deviceLanguage; // If there is no stored language, get device language.

    if (!storedLanguage) {
        await AsyncStorage.setItem('language', deviceLanguage); // If there is no stored language, set stored language as device language.
    }

    return i18n.use(initReactI18next).init({
        compatibilityJSON: 'v3',
        resources: {
            tr: require('../localization/tr.json'),
            en: require('../localization/en.json'),
        },
        lng: i18nLanguage,
        fallbackLng: 'tr',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });
}

export type LanguageType = 'en' | 'tr';

export function useLocalization() {
    const {t} = useTranslation();

    const currentLanguage = useMemo<LanguageType>(
        () => i18n.language as LanguageType,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [i18n.language],
    );

    const changeLanguage = useCallback(
        (lng?: LanguageType, callback?: Callback) => {
            return i18n.changeLanguage(lng, callback);
        },
        [],
    );

    return useMemo(
        () => ({t, changeLanguage, currentLanguage}),
        [t, changeLanguage, currentLanguage],
    );
}
