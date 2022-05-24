import { StyleSheet, Text, View, Button, FlatList } from 'react-native';

const Form = ({ navigation }) => {
    return (
        <View>
                        <Text>Form</Text>

            <View style={{ height: '100px' }}>
                <Button title='Go to HomeScreen'
                    onPress={() => { navigation.navigate('HomeScreen') }}
                />
            </View>

        </View>

    )
}
export default Form;