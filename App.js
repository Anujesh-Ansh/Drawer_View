import * as React from 'react';
import { StyleSheet,Text,Pressable, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native';


const Drawer = createDrawerNavigator();

function Home({navigation}){
  function onPressHandler(){
    navigation.navigate('New_Page1');
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
function New_Page1({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.navigate('New_Page2');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page2({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.navigate('New_Page3');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page3({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.navigate('New_Page4');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page4({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.navigate('New_Page5');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page5({navigation}){

  function onPressHandler(){
    // navigation.replace('Home')
    navigation.navigate('New_Page6');
  }

  return(
    <View style={styles.body}>
      <Text style={styles.text}>Bonjour !!</Text>
      <Pressable onPress={onPressHandler} style={styles.buttonHome}>
        <Text>
          <Icon name="arrow-right" size={20} color="black" />
        </Text>
      </Pressable>
    </View>
  )
}
function New_Page6({navigation}){

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
        <Drawer.Screen name="New_Page1" component={New_Page1} />
        <Drawer.Screen name="New_Page2" component={New_Page2} />
        <Drawer.Screen name="New_Page3" component={New_Page3} />
        <Drawer.Screen name="New_Page4" component={New_Page4} />
        <Drawer.Screen name="New_Page5" component={New_Page5} />
        <Drawer.Screen name="New_Page6" component={New_Page6} />
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