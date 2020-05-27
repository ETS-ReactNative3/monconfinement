import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Colors from './constants/Colors';
import HeaderOptions from './constants/HeaderOptions'
import ActivityScreen from './screens/ActivityScreen';

const Stack = createStackNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Sorties" 
              component={HomeScreen}
              options={ HeaderOptions }
            />
            <Stack.Screen 
              name="Paramètres" 
              component={SettingsScreen} 
              options={ HeaderOptions } 
            />
            <Stack.Screen 
              name="Activité" 
              component={ActivityScreen} 
              options={ HeaderOptions } 
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
