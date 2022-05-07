import './signinStyle.scss';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Title} from "./singinSC";
import AlertCP from "../../../shared/component/alert/AlertCP";

class SigninCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Title>Hi Sing In</Title>
                <AlertCP/>
            </>

        );
    }
}

export default SigninCP;