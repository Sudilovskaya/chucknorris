import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './components/App';
import {Provider} from "react-redux";
import {store} from "./state/store";

const root = document.getElementById('root')

createRoot(root).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);