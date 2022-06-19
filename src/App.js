import React from 'react';
import Routes from './navigation/Routes.jsx';
import { store } from './stores/index';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store} >
      <Routes />
    </Provider>
  );
};


