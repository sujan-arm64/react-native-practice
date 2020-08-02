import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {
  state = {
    Hello : "Hey",
    hmm : "ok"
  }
  changek = () => this.setState({
    Hello:"changed"
  })
  render(){
    return (
        <View onTouchMove={() => this.setState({Hello:"ok"})} style={styles.container}>
          <Text>{this.state.Hello}</Text>
          <TextInput defaultValue="Type text"/>
          <StatusBar style="auto" />
        </View>
        
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#abc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
