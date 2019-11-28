import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './routers';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'mobx-react'
import store from './store'
ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}