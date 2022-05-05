import './signinStyle.scss';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Title} from "./singinSC";

class SigninCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Title>Hi Sing In</Title>
            </>

        );
    }
}

export default SigninCP;