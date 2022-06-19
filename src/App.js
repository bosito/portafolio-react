import React from 'react';
import Routes from './navigation/Routes.jsx';
import { store } from './stores/index';
import { Provider } from 'react-redux';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <Provider store={store} >
      <Routes />
      <ToastContainer  />
    </Provider>
  );
};


