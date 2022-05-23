import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
const list = [
    {
        id: 1,
        title: 'Ratchet & Clank 2',
        description: 'Ca claque !',
        image: "https://www.cdiscount.com/pdt2/p/s/4/1/550x550/ratchetclankps4/rw/ratchet-clank-jeu-ps4.jpg",
        support: '0h50',
        price: '56'
    },
    {
        id: 2,
        title: 'Rocket League',
        description: 'D\' la balle !',
        image: "https://fr.shopping.rakuten.com/photo/rocket-league-edition-ultimate-1208766747_L.jpg",
        support: 'PS2',
        price: '149'
    },
    {
        id: 3,
        title: 'Resident Evil 4',
        description: 'Mortel !',
        image: "https://upload.wikimedia.org/wikipedia/en/d/d9/Resi4-gc-cover.jpg",
        support: 'GameCube',
        price: '12'
    },
    {
        id: 4,
        title: 'Mass Effect 3',
        description: 'En effet...',
        image: "https://images2.medimops.eu/product/01215b/M0B004H0MK4S-source.jpg",
        support: 'Xbox 360',
        price: '10'
    },
    {
        id: 5,

        title: 'DayZ',
        description: 'Pas Donald...',
        image: "https://fr.shopping.rakuten.com/photo/dayz-1277200576_L.jpg",
        support: 'Xbox One',
        price: '39'
    }
]
const GamingScreen = () => {
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
                                {/*avec car cover style={{ width: '100%', height: '100%' }} */}
                                    <Card.Cover  source={{ uri: item.image }} /></View>
                                <View style={[styles.contentColumn,{ flex: .5 }]}>
                                    <Title style={styles.text}>{item.title}</Title>
                                    <Text> Descriptif : </Text>

                                    <Text> {item.description} </Text>
                                    <Text> {item.price} balles </Text>
                                    <Button mode="contained"
                                    type='text'
                                    >
                                      Buy
  </Button>
                                </View>

                            </Card.Content>
                          {/*   <Card.Content style={styles.content}>
                                <Paragraph>{item.id}</Paragraph>
                            </Card.Content> */}
                            <Card.Content style={styles.content}>
                                {/*  <View>{
                      item.distance == '' ? <Paragraph>Aucune</Paragraph> : <Paragraph>{item.distance} Km</Paragraph>
                    }</View> */}
                                {/*                     <Paragraph>{item.time} mn</Paragraph>
 */}                  </Card.Content>
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

text:{
    fontSize: '15px',

},
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    contentColumn: {
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'space-evenly'
    }

});
export default GamingScreen;