import { createDrawerNavigator } from '@react-navigation/drawer';
import GamingScreen from '../screens/GamingScreen.js'
import ProductSheet from '../screens/ProductSheet.js'

const Drawer = createDrawerNavigator();

const OurDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="GamingScreen" options={{ title: 'GamingScreen' }} component={GamingScreen} />
            <Drawer.Screen name="ProductSheet" options={{ title: 'ProductSheet' }} component={ProductSheet} />
        </Drawer.Navigator>
    )
}

export default OurDrawer;