import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CryptoListScreen from './src/screens/ListScreen';
import CryptoDetailScreen from './src/screens/DetailScreen';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="CryptoList"
          component={CryptoListScreen}
          options={{ title: 'Cryptocurrencies' }}
        />
        <Stack.Screen
          name="CryptoDetail"
          component={CryptoDetailScreen}
          options={{ title: 'Crypto Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;