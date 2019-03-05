import React, { Component } from 'react';

import './HeaderNavbar.css';

class HeaderNavbar extends Component {
    render(){
        return(
            <div className="header-navbar">
                <h1>{this.props.pageHeading}</h1>
            </div>
        )
    }
}

export default HeaderNavbar;