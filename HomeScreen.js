import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>Home</Text>
             
            <Button title='Go to GamingScreen'
                onPress={() => { navigation.navigate('GamingScreen') }}
            />

        </View>

    )
}
export default HomeScreen;