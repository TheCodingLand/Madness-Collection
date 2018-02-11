import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Reboot from 'material-ui/Reboot';
ReactDOM.render(<App> <Reboot /></App>, document.getElementById('root'));
registerServiceWorker();
