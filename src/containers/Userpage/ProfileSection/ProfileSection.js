import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

import { updatePageHeading } from '../../../actions/pageActions';
import store from '../../../store';

class ProfileSection extends Component{
    btnClickHandler = () => {
        store.dispatch(updatePageHeading('about'));
        this.props.history.push('/about');
    }

    render(){
        // console.log(this.props)
        return(
            <div>
                <button onClick={this.btnClickHandler} >Navigate to About Page</button>
            </div>
        )
    }
}

export default withRouter(ProfileSection);