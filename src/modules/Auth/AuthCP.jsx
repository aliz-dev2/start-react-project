import './authStyle.scss';
import {Outlet} from "react-router-dom";
import React, {Component} from 'react';

class AuthCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div>Hi Aurth In</div>
                <Outlet/>
            </>

        );
    }
}

export default AuthCP;