import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigator/AppNavigator';

const initialState = {
  action: '',
  name: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLOSE_MENU':
      return { action: 'closeMenu' };

    case 'OPEN_MENU':
      return { action: 'openMenu' };

    case 'UPDATE_NAME':
      return { name: action.name };

    default:
      return state;
  }

  // if (action.type === 'CLOSE_MENU') {
  //   return { action: 'closeMenu' };
  // }

  // if (action.type === 'OPEN_MENU') {
  //   return { action: 'openMenu' };
  // }

  // if (action.type === 'UPDATE_NAME') {
  //   return { name: action.name };
  // }

  // return state;
};

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
