import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routers from './Routers';
import {Provider} from 'react-redux';
import {persistor, store} from './redux';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <Routers />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
