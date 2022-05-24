import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import React, { useContext } from 'react';
import { Avatar, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import ProductSheet from './ProductSheet';
import List from '../list.json'

const list = List

const GamingScreen = ({  route, navigation  }) => {

    return (
        <View>
        

            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item }) =>
                    <View style={{
                        alignItems: 'center'
                    }}
                    >
                        <Card style={{
                            borderWidth: 1,
                            borderColor: "black",
                            marginBottom: 10,
                            elevation: 30,
                            shadowColor: 'black',
                            width: '80%'
                        }}>
                            <Card.Content style={[styles.content, { flex: 1 }]}>
                                <View style={[{ flex: .5 }]}>
                                    <Card.Cover style={{ width: '100%', height: '100%' }}
                                        source={{ uri: item.image }} /></View>
                                <View style={[styles.contentColumn, { flex: .5 }]}>
                                    <Title style={styles.text}>{item.title}</Title>
                                    <Text> Descriptif : </Text>

                                    <Text> {item.description} </Text>
                                    <Text> {item.price} balles </Text>
                                    <Button mode="contained"
                                        type='text'
                                        title = 'Voir'
                                        onPress={() => { navigation.navigate('ProductSheet',{id:item.id}) }}
                                    />
                                        
                                </View>

                            </Card.Content>

                            <Card.Content style={styles.content}>
                            </Card.Content>
                        </Card>
                    </View>
                }
            />

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        fontSize: '15px',

    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentColumn: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }

});
export default GamingScreen;