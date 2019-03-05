import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import About from '../About/About';
import Home from '../Home/Home';
import './SideNavbar.css';

class SideNavbar extends Component{
    render(){
        return(
            <Route render={({ location, history }) => (
                <React.Fragment>
                <SideNav
                  onSelect={(selected) => {
                    const to='/'+selected;
                    if(location.pathname !== to){
                      history.push(to);
                    }
                    this.props.callbackPageHeading(selected);
                  }}
                >
                  <SideNav.Toggle />
                  <SideNav.Nav defaultSelected="home">
                      <NavItem eventKey="home">
                          <NavIcon>
                              <i className="fa fa-home" style={{fontSize: '1.75em'}} />
                          </NavIcon>
                          <NavText>
                              Home
                          </NavText>
                      </NavItem>
                      <NavItem eventKey="about">
                          <NavIcon>
                              <i className="fa fa-building" style={{fontSize: '1.75em'}} />
                          </NavIcon>
                          <NavText>
                              About
                          </NavText>
                      </NavItem>
                  </SideNav.Nav>
                </SideNav>
                <main>
                  <Route path='/home' exact component={props => <Home />} />
                  <Route path='/about' component={props => <About/> } />
                </main>
                </React.Fragment>
              )}
              />
        )
    }
}

export default SideNavbar;