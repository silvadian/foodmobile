import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Routers from './Routers';
import {Provider} from 'react-redux';
import {persistor, store} from './redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Loading} from './components';

const MainApp = () => {
  return (
    <>
      <Routers />
      <Loading />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
