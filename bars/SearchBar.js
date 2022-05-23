import { SearchBar } from 'react-native-elements';




const Search = () =>{
    return (
        <SearchBar
        platform="default"
        containerStyle={{}}
        inputContainerStyle={{}}
        inputStyle={{}}
        leftIconContainerStyle={{}}
        rightIconContainerStyle={{}}
        loadingProps={{}}
        onClearText={() => console.log(onClearText())}
        placeholder="Recherche"
        placeholderTextColor="blanchedalmond"
        cancelButtonProps={{}}
        onCancel={() => console.log(onCancel())}
        
      />
    )
}

export default Search;