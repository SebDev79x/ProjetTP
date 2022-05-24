import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../HomeScreen';
import OurDrawer from './DrawerNav.js'
import GamingScreen from '../screens/GamingScreen';
const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen'>
                <Stack.Screen name="HomeScreen" options={{ title: 'HomeScreen' }} component={HomeScreen} />
                <Stack.Screen name="OurDrawer" options={{ title: 'OurDrawer' }} component={OurDrawer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNav;