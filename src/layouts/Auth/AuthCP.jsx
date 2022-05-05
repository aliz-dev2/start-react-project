import './authStyle.scss';
import {Outlet} from "react-router-dom";
import React, {Component} from 'react';
import {AuthLayout} from "../Auth/authSC";

class AuthCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AuthLayout>
                <div>Hi Auth Layout</div>
                <Outlet/>
            </AuthLayout>

        );
    }
}

export default AuthCP;