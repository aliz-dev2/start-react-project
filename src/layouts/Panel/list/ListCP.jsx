import './listStyle.scss';
import React, {Component} from 'react';
import {Title} from "./listSC";
import PanelCP from "../PanelCP";

class ListCP extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Title>Hi list</Title>
        );
    }
}

export default ListCP;