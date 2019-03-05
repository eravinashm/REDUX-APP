import React, { Component } from 'react';

// import './App.css';
import HeaderNavbar from './containers/HeaderNavbar/HeaderNavbar';
import SideNavbar from './containers/SideNavbar/SideNavbar';
class App extends Component {
  state = {
    pageHeading: 'HOME'
  }

  callbackPageHeading = (pageHeading) => {
    this.setState({pageHeading: pageHeading});
  }

  render() {
    return (
      <React.Fragment>
        <HeaderNavbar pageHeading={this.state.pageHeading} />
        <SideNavbar  callbackPageHeading={this.callbackPageHeading} />
      </React.Fragment>
    );
  }
}



export default App;
{/*
 <div className="App">
        <img 
        src={logo} 
        className={
        "App-logo" + 
        (this.props.rotating ? "":" App-logo-paused")
        } 
        alt="logo" 
        onClick={
        this.props.rotating ? 
        this.props.stopAction : this.props.startAction
        }
        />
      </div>
*/}