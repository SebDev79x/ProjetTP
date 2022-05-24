import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
            <Button title='Go to GamingScreen'
                onPress={() => { navigation.navigate('OurDrawer') }}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />

        </View>

    )
}
export default HomeScreen;