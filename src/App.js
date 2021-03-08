import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router/Router';
import Context from './context/Context';
import Steps from './components/Steps';
import {Text, View, StyleSheet} from 'react-native';

const App = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  return (
    <Context.Provider
      style={styles.appContainer}
      value={{
        currentPosition,
        setCurrentPosition,
      }}>
      <NavigationContainer>
        <View style={{backgroundColor: '#fff'}}>
          <Text style={styles.header}>Shared Discount Calculator</Text>
          <Steps />
          <View style={styles.hr} />
        </View>
        <Router />
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  hr: {
    borderWidth: 1,
    borderColor: '#eeeeee',
    // marginBottom: 15,
  },
});
