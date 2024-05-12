import {memo} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/HomeScreen';
import {View} from 'react-native';
import {styles} from './style.ts';

const Stack = createStackNavigator();

const stackOptions = {
  headerShown: false,
};

export const AppNavigator = memo(function ApplicationNavigator() {
  return (
    <View style={styles.container}>
      <Stack.Navigator screenOptions={stackOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </View>
  );
});
