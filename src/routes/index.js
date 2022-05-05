import React from 'react';
//import {Switch} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Route from "./MyRoute";
import modules from '../modules';

export default function MyRoutes() {
    return (
        <Routes>
            {modules.map(module => (
                module.routeProps.map(route => (
                    <Route route={route} {...route} module={module}/>
                ))
            ))}
        </Routes>
    );
}