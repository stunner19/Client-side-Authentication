import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

class Signin extends Component {
    constructor(props){
        super(props);
    }

    handleFormSubmit = (formProps) => {
        this.props.signinUser(formProps.email,formProps.password,() => {
            this.props.history.push('/feature');
        });
    };

    renderAlert = () => {
        if(this.props.errorMessage){
            return(
                <div className = "alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

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
                {this.renderAlert()}
                <button action = "submit" className = "btn btn-primary">Sign In</button>
            </form>
        );  
    }
}

export default reduxForm({form : 'signin',})(Signin);