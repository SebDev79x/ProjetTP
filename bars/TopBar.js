import { StyleSheet, Text, View, FlatList } from 'react-native';

import { Avatar, Button, Card, Title, Paragraph, Appbar, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

const TopBar = () =>{
    return (
<Appbar >
          <Appbar.Action icon="mail" onPress={() => console.log('Pressed mail')} />
          <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
          <Appbar.Action
            icon="delete"
            onPress={() => console.log('Pressed delete')}
          />
        </Appbar>
    )
}
export default TopBar;
const styles = StyleSheet.create({
    
    top: {
      position: 'absolute',
      right: 0,
      left: 0,
      bottom: 0,
    },
    
  
  });