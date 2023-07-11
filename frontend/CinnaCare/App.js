import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScreenM from './src/screen/ScreenM';
import Home from './src/screen/Home';
import RBDIdentify from './src/screen/RBDIdentify';
import MultipleImg from './src/screen/MultipleImg';
import NDIdentify from './src/screen/NDIdentify';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#7B3F00',
        },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
        }
      }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'CinnaCare', headerShown: true,}}
        />
        <Stack.Screen
          name="Rough Bark Disease"
          component={ScreenM}
          options={{ title: 'Rough Bark Disease', headerShown: false, }}
        />
        <Stack.Screen
          name="Identify Disease Stage"
          component={RBDIdentify}
          options={{ title: 'Identify Disease Stage' }}
        />
        <Stack.Screen
          name="MultipleImg"
          component={MultipleImg}
          options={{ title: 'Multiple Images' }}
        />
        <Stack.Screen
          name="Nutrient Deficiency"
          component={NDIdentify}
          options={{ title: 'Nutrient Deficiency' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;