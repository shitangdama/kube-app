import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

if (module.hot) {
  module.hot.accept();
}