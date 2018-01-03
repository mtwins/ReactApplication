import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
//Home page
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome To My First Application'
  };
  render() {
     const { navigate } = this.props.navigation;
     return (
       <View style={styles.container}>
         <Text  style={styles.textstyle}>Hello and Welcome to my application!{'\n'} This is the home page.{'\n'}</Text>
         <Button
		 color="#841584"
           onPress={() => navigate('SecondPage')}
           title="Click to navigate to the next page"
         />
       </View>
     );
   }
}
//Second page of application
class SecondPage extends React.Component {
  static navigationOptions = {
    title: 'SecondPage',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textstyle} > Hello World!{'\n'} This is the second page of my application.</Text>
      </View>
    );
  }
}
//Add stack Navigator
const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
   SecondPage: { screen: SecondPage },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
//Styling for application
const styles = StyleSheet.create({
 textstyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 40,
	fontWeight: 'bold'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	//fontSize: 20,
   // margin: 0,

	//fontWeight: 'bold'
  }
});