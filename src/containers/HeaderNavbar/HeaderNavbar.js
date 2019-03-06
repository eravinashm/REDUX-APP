import React, { Component } from 'react';

import './HeaderNavbar.css';
import store from '../../store';
import Heading from '../../constant/Heading';

class HeaderNavbar extends Component {
    render(){
        // console.log(this.props.pageHeading);
        // console.log(store.getState());
        let storePageHeading = store.getState().pageHeading;
        let tempHeading = storePageHeading.toUpperCase();
        
        return(
            <div className="header-navbar">
                <h1>{tempHeading}</h1>
            </div>
        )
    }
}

export default HeaderNavbar;