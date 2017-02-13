import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// see https://www.npmjs.com/package/material-ui#react-tap-event-plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
