import React from 'react';
import { StyleSheet, Image, TextInput, Pressable, View, Text, FlatList, } from 'react-native';


const arrData = [
  { id: 1, title: 'item 1'},
  { id: 2, title: 'item 2'},
  { id: 3, title: 'item 3'}
]

const ListItem = props => {
  return(
    <View style={ styles.ListItem}>
      <text style={styles.ListItemText}>{props.title}</text>
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>ToDoList</Text>
        <Image source={require('./assets/apple-touch-icon.png')} style={styles.logo}></Image>
      </View>
      <View style={ styles.main}>
        <View style={styles.formContainer}>
          <TextInput
          placeholder= 'Indtast opgave' 
          style={styles.TextInput}

          
          ></TextInput>
          <Pressable style={styles.button}>
            <text style={styles.buttonText}>+</text>
          </Pressable>
        </View>
      <FlatList data={arrData} renderItem={itemData => {
        return <ListItem title={itemData.item.title}></ListItem>
      }}>

      </FlatList>
     </View>
     </View>  
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 5,
    borderColor: 'black',
    backgroundColor: '#fff',

    
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'darkcyan',       
    paddingTop: 40,
    PaddingHorizontal: 40,
    
  },
  boldText:{
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    
  },
 
  logo: {
    height: 50,
    width: 50,
  }, 
  main: {
    height: 500,
    padding: 20,

  },
  ListItem:{
    borderWidth: 1,
    backgroundColor: 'darkcyan',
    borderRadius: 5,
    marginBottom: 8,
    paddingHorizontal: 8,
    paddingVertical: 15,

  },
  ListItemText:{ 
    color:'black',
    fontWeight: 'bold',

  },
  formContainer:{
    flexDirection: 'row',
    paddingBottom: 15,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
  }, 
  TextInput:{
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 6,
    width: '84%',
    padding: 10,

  },
  button:{
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    width: 50,
    alignContent: 'center',
    backgroundColor: 'darkgoldenrod',
  },
  buttonText:{
    padding: 10,
    fontSize: 20,
  }

  

});
