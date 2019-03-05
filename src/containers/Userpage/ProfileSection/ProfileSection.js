import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class ProfileSection extends Component{
    btnClickHandler = () => {
        this.props.history.push('/about');
    }

    render(){
        console.log(this.props)
        return(
            <div>
                <button onClick={this.btnClickHandler} >Navigate to About Page</button>
            </div>
        )
    }
}

export default withRouter(ProfileSection);