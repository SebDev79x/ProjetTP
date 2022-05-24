import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GamingScreen from '../screens/GamingScreen.js';
import HomeScreen from '../HomeScreen.js';
import OurDrawer from './DrawerNav.js'
import Form from '../screens/FormScreen.js'
import ProductSheet from '../screens/ProductSheet.js'
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StackNav = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='HomeScreen'>


                <Stack.Screen name="OurDrawer" options={{ title: 'Menu' }} component={OurDrawer} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default StackNav;