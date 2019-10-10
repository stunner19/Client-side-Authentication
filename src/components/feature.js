import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class Feature extends Component{

    componentDidMount(){
        this.props.fetchMessages();
    }

    render(){
        return(
            <div>This is a feature</div>
        );
    }
}

export default connect(null,actions)(Feature);