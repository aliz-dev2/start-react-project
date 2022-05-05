import './panelStyle.scss';
import {Outlet} from "react-router-dom";
import React, {Component} from 'react';
import {PanelLayout} from "./panelSC";

class PanelCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <PanelLayout>
                <div>Hi Panel Layout</div>
                <Outlet/>
            </PanelLayout>

        );
    }
}

export default PanelCP;