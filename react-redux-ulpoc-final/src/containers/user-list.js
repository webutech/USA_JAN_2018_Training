import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SelectUser from '../actions';


class UserList extends Component {
    createUserList(){
        return this.props.users.map((user)=>{
            return <li key={user.id}
            onClick={()=>{this.props.SelectUser(user)}}>{user.name}</li>
        })
    }
    render() {
        return (
            <ul>
                {this.createUserList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        users:state.users
    }
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({SelectUser:SelectUser},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps) (UserList);