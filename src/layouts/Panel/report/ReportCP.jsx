import './reportStyle.scss';
import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Title} from "./reportSC";
import AlertCP from "../../../shared/component/alert/AlertCP";

class ReportCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Title>Hi Report</Title>
                <AlertCP/>
            </>
        );
    }
}

export default ReportCP;