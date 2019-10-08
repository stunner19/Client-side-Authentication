import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
    constructor(props){
        super(props);
    }

    handleFormSubmit = (formProps) => {
        this.props.signinUser(formProps.email,formProps.password);
    };

    render(){
        const { handleSubmit } = this.props;
        return(
            <form onSubmit = {handleSubmit(this.handleFormSubmit)}>
                <fieldset className = "form-group">
                    <label>Email:</label>
                    <Field name = "email" type = "text" component = "input" autoComplete = "none" className = "form-control"/>
                </fieldset>
                <fieldset className = "form-group">
                    <label>Password:</label>
                    <Field name = "password" type = "password" component = "input" autoComplete = "none" className = "form-control" />
                </fieldset>
                <button action = "submit" className = "btn btn-primary">Sign In</button>
            </form>
        );  
    }
}

export default reduxForm({form : 'sign',})(Signin);