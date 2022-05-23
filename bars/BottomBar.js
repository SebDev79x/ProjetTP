import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const BottomBar = () =>{
    return (
<Appbar style={styles.bottom}>
          <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
          <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>
    )
}
export default BottomBar;
const styles = StyleSheet.create({
    
    bottom: {
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
    },
    
  
  });

