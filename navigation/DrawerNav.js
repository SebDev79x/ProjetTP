import { createDrawerNavigator } from '@react-navigation/drawer';
import GamingScreen from '../screens/GamingScreen.js'
import ProductSheet from '../screens/ProductSheet.js'
import Form from '../screens/FormScreen.js'
import HomeScreen from '../HomeScreen.js'

const Drawer = createDrawerNavigator();

const OurDrawer = ({navigate}) => {
    return (
        
        <Drawer.Navigator>
            <Drawer.Screen name="HomeScreen" options={{ title: 'HomeScreen' }} component={HomeScreen} />
            <Drawer.Screen name="GamingScreen" options={{ title: 'GamingScreen' }} component={GamingScreen} />
            <Drawer.Screen name="ProductSheet" options={{ title: 'ProductSheet' }} component={ProductSheet} />
            <Drawer.Screen name="Form" options={{ title: 'Form' }} component={Form} />
        </Drawer.Navigator>
    )
}

export default OurDrawer;