import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RssListScreen from '../screens/RssListScreen';
import FeedScreen from '../screens/FeedScreen';
import EntryScreen from '../screens/EntryScreen';

const Stack = createStackNavigator();

function BlogNavigator() {
  return (
      <NavigationContainer>
    <Stack.Navigator
      initialRouteName="RssList"
    >
      <Stack.Screen
        name="RssList"
        component={RssListScreen}
        options={{ title: 'VocaNews' }}
      />
      <Stack.Screen
        name="Feed"
        component={FeedScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
        <Stack.Screen
        name="Entry"
        component={EntryScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default BlogNavigator;