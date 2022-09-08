import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import BerandaPage from './src/page/beranda/beranda_page';
import LoginPage from './src/page/login/login_page';
//import SplashScreen from './src/page/splash_screen/splash_page';

const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Beranda"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="BerandaPage" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;