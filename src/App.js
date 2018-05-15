import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Containers from './containers';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Containers />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
