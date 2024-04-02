import * as React from 'react';
import { StyleSheet,Text,Pressable, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

function Home({navigation}){
  function onPressHandler(){
    navigation.navigate('New_Page');
  }
  return(
    <View style={styles.body}>
      <Text style={styles.text}>Hello</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonNext}>
      <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.goBack();
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-left" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="New_Page" component={New_Page} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    margin:10,
  },
  buttonNext: {
    padding:20,
    backgroundColor: '#ffdb30',
    borderRadius: 50,
  },
  buttonHome: {
    padding:20,
    backgroundColor: '#24a0ed',
    borderRadius: 50,
  }
});