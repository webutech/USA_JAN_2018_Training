import React from 'react';
const SelectUser = (user) =>{
    console.log('You selected '+user.name);

    return{
        type : "USER_SELECTED",
        payload: user
    }

}

export default SelectUser;