import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store';
// import './App.css';
import HeaderNavbar from './containers/HeaderNavbar/HeaderNavbar';
import SideNavbar from './containers/SideNavbar/SideNavbar';
import { updatePageHeading } from './actions/pageActions';

class App extends Component {

  callbackPageHeading = (pageHeading) => {
    // debugger;
    store.dispatch(updatePageHeading(pageHeading));
  }

  render() {
    return (
      <React.Fragment>
        <HeaderNavbar />
        <SideNavbar  callbackPageHeading={this.callbackPageHeading} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = param => {
  // console.log(param)
  return {param} 
}

export default connect(mapStateToProps)(App);
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