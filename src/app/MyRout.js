import React from 'react';
import {useNavigate, Navigate, BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom';
import SigninCP from "../layouts/Auth/signin/SigninCP";
import SignupCP from "../layouts/Auth/signup/SignupCP";
import ReportCP from "../layouts/Panel/report/ReportCP";
import ListCP from "../layouts/Panel/list/ListCP";
import PanelCP from "../layouts/Panel/PanelCP";
import AuthCP from "../layouts/Auth/AuthCP";

const ProtectedRoute = ({user, redirectPath = 'signin'}) => {
    if (!user.allow) {
        return <Navigate to={redirectPath} replace/>;
    }
    return <Outlet/>;
};

const MyRout = () => {
    const user = {
        allow: true,
        redirectPath: '/signin'
    };
    return (
        <Router>
            <Routes>
                <Route element={<AuthCP/>}>
                    <Route path="signin" index element={<SigninCP/>}/>
                    <Route path="signup" element={<SignupCP/>}/>
                    <Route path={"*"} element={<SigninCP/>}/>
                </Route>

                <Route element={<ProtectedRoute user={user}/>}>
                    <Route element={<PanelCP/>}>
                        <Route path="report" element={<ReportCP/>}/>
                        <Route path="list" element={<ListCP/>}/>
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
};

export default MyRout;
