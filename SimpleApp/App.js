import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome To My First Application'
  };
  render() {
     const { navigate } = this.props.navigation;
     return (
       <View>
         <Text>Hello and Welcome!</Text>
         <Button
           onPress={() => navigate('SecondPage')}
           title="Click to navigate to the next page"
         />
       </View>
     );
   }
}

class SecondPage extends React.Component {
  static navigationOptions = {
    title: 'SecondPage',
  };
  render() {
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
   SecondPage: { screen: SecondPage },
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});