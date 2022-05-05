import './App.css';
import React from 'react';
import {Navigate, BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import modules from './modules';
import SigninCP from "./modules/Auth/signin/SigninCP";
import SignupCP from "./modules/Auth/signup/SignupCP";
import ReportCP from "./modules/Panel/report/ReportCP";
import ListCP from "./modules/Panel/list/ListCP";

const ProtectedRoute = ({user, redirectPath = 'signin'}) => {

    if (!user.allow) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

const handleRoute = () => {
    const user = {
        allow: false,
        redirectPath: '/signin'
    };
    return (
        <Router>
            <Routes>
                <Route path="signin" index element={<SigninCP/>}/>
                <Route path="signup" element={<SignupCP/>}/>
                <Route element={<ProtectedRoute user={user}/>}>
                    <Route path="report" element={<ReportCP/>}>
                        <Route path=":id" element={<SignupCP/>}/>
                    </Route>
                    <Route path="list" element={<ListCP/>}/>
                </Route>
                <Route path={"*"} element={<SigninCP/>}/>
            </Routes>
        </Router>
    );
};

function Root() {
    return (
        <div className={'pacs'}>{handleRoute()}</div>
    );
}

export default Root;
