import './signupStyle.scss';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Title} from "./singupSC";

class SignupCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Title>Hi Sing up</Title>
            </>

        );
    }
}

export default SignupCP;