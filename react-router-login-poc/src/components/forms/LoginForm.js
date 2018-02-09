
import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import PropTypes from 'prop-types';
import InLineError from '../messages/InLineError';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{
                email:'',
                password:''
            },
            loading:false,
            errors:{}
        };
        
    }

    onChange = (event)=>{
        this.setState({
            data:{...this.state.data,[event.target.name]:event.target.value}
        });
    };

    onSubmit = () =>{
        const errors=this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length===0){
            this.props.submit(this.state.data);
        }
    };

    validate = (data) =>{
        const errors={};
        if(!Validator.isEmail(data.email)) errors.email="Invalid Email!";
        if(!data.password) errors.password="Can't be blank!";
        return errors;
    }
    
    render() {
        const {data,errors}=this.state
        return (
            <div>
               <Form onSubmit={this.onSubmit}>
                   <Form.Field error={!!errors.email}>
                       <lable htmlFor="email">Email</lable>
                       <input 
                            type="text" 
                            id="email" 
                            name="email" 
                            placeholder="example@example.com"
                            value={data.email}
                            onChange={this.onChange}
                        />
                        {errors.email && <InLineError text={errors.email}/>}
                   </Form.Field>
                   <Form.Field error={!!errors.password}>
                       <lable htmlFor="password">Password</lable>
                       <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            placeholder="Make it secure"
                            value={data.password}
                            onChange={this.onChange}
                        />
                        {errors.password && <InLineError text={errors.password}/>}
                   </Form.Field>
                   <Button primary>Login</Button>
               </Form>
            </div>
        );
    }
}

LoginForm.propTypes={
    submit:PropTypes.func.isRequired
}

export default LoginForm;