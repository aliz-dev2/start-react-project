import './alertStyle.scss';
import React, {Component} from 'react';
import {Title} from "./alertSC";

class AlertCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Title>Hi alert in shared</Title>
            </>

        );
    }
}

export default AlertCP;