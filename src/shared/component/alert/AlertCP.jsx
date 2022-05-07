import './alertStyle.scss';
import React, {Component} from 'react';
import {Text} from "./alertSC";

class AlertCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Text>Hi alert in shared</Text>
            </>

        );
    }
}

export default AlertCP;