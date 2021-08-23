import React from 'react';
import { Provider } from 'react-redux';
import ListOfRoute from './route/core';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ListOfRoute />
    </Provider>
  );
}

export default App;
