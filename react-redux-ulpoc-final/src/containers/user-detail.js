import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetail extends Component {
    render() {
        if(!this.props.user){
            return <h3>Select User......</h3>
        }
        return (
           
            <div>
                <p>ID : {this.props.user.id}</p>
                <p>Name : {this.props.user.name}</p>
                <p>Contact : {this.props.user.contact}</p>
                <p>Email : {this.props.user.email}</p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        user:state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail);