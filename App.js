import React from 'react';
import store from './store/store';
import { Provider } from 'react-redux';

import BlogNavigator from './navigation/BlogNavigator';

export default function App() {
  return (
    <Provider store={store}>
        <BlogNavigator />
    </Provider>
  );
}

