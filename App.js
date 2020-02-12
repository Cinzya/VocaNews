import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import store from './store/store';
import { Provider } from 'react-redux';

import RssListScreen from './screens/RssListScreen';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
      <RssListScreen />
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
