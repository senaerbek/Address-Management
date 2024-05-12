import {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {SafeAreaView} from 'react-native';
import {styles} from './style.ts';

const Stack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

export const AppNavigator = memo(function ApplicationNavigator() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
});
