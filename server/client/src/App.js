import React from 'react';
import AppRouter from './components/container/AppRouter';
import store from './store/store';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <h1>Indigado</h1>
     <AppRouter />
    </div>
    </Provider>
  );
}

export default App;
