import React, { Component } from 'react';
import { connect } from 'react-redux';

import store from './store';
// import './App.css';
import HeaderNavbar from './containers/HeaderNavbar/HeaderNavbar';
import SideNavbar from './containers/SideNavbar/SideNavbar';
import { updatePageHeading } from './actions/pageActions';

class App extends Component {

  callbackPageHeading = (pageHeading) => {
    store.dispatch(updatePageHeading(pageHeading));
  }

  render() {
    // console.log(this.props);
    console.log(this.props.pageHeading.pageHeading);
    return (
      <React.Fragment>
        <HeaderNavbar pageHeading={this.props.pageHeading.pageHeading} />
        <SideNavbar  callbackPageHeading={this.callbackPageHeading} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = param => {
  console.log(param)
  return {
    pageHeading: param.pageHeading
  }
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