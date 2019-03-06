import React, { Component } from 'react';

import './HeaderNavbar.css';

class HeaderNavbar extends Component {
    render(){
        let heading = this.props.pageHeading;
        return(
            <div className="header-navbar">
                <h1>{heading.toUpperCase()}</h1>
            </div>
        )
    }
}

export default HeaderNavbar;