import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import List from '../list.json'
const ProductSheet = ({ route, navigation }) =>{
  /* 2. Get the param */
  const { id } = route.params;    
  const games = List
const game = games.filter((e)=>{

return e.id == id
})
/*   console.log("game",games);
 */  console.log("game",game);
 console.log("typeof {id}",typeof({id}));

  return (
<View>
   <Text>Numéro d'article : {id}
   </Text>
   <FlatList 
     data={game}
     keyExtractor={item => item.id}
     renderItem={({ item }) =>
     <Card >
      <Card.Content >
          <View >
              <Card.Cover 
                  source={{ uri: item.image }} /></View>
          <View>
              <Title >{item.title}</Title>
              <Text> Descriptif : </Text>

              <Text> {item.description} </Text>
              <Text> {item.price} balles </Text>
              
                  
          </View>

      </Card.Content>

     
  </Card>  

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
export default ProductSheet;
