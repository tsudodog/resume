import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import './App.css';
import HeaderTabs from './HeaderTabs';




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
      <div className="App">
        <HeaderTabs></HeaderTabs>
        <Button variant="contained" color="primary">Hello World!</Button>
        <Footer title="this goes in the footer"></Footer>
      </div>
    );
  }
}

export default App;
