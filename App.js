import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//page
// import BerandaPage from './src/page/beranda/beranda_page';
// import GreenHousePage from './src/page/green_house/green_house_page';
//redux
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';
import notifikasi_page from './src/page/notifikasi/notifikasi_page';
import NotifikasiPage from './src/page/notifikasi/notifikasi_page';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="BerandaPage" component={NotifikasiPage} /> 
          {/* <Stack.Screen name="GreenHousePage" component={GreenHousePage} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;