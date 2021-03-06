import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import store from './redux/store';


import './index.css';
import App from './App';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <Router>
        <PersistGate persistor={store.persistor}>
          <App />
        </PersistGate>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)




