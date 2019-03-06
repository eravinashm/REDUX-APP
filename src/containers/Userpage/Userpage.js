import React, { Component } from 'react';

import ProfileSection from './ProfileSection/ProfileSection';

class Userpage extends Component{
    render(){
        // console.log(this.props)
        return(
            <div className="sidenavbar-expanded">
                <ProfileSection />
            </div>
        )
    }
}

export default Userpage;