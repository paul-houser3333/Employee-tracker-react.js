import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// .register() will allow Offline and load faster. 
// made debuging more difficult... I found out.
// 
// serviceWorker.unregister();

serviceWorker.register();