import React, { Component } from 'react';
import theme from './theme.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import HeaderTabs from './components/HeaderTabs';




const Timeline = (props) => {

  return(
    <div>
    
    </div>
  );
}



const Footer = (props) =>{

  return(
    <h1>{props.title}</h1>
  )

}
class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <HeaderTabs></HeaderTabs>
          <Button variant="contained" color="primary">Hello World!</Button>
          <Footer title="this goes in the footer"></Footer>
        </div>
      </MuiThemeProvider>

    );
  }
}

export default App;
