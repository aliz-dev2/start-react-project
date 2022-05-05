import SigninCP from "./signin/SigninCP";
import React from "react";

export default {
    routeProps: [
        {
            path: '/',
            element: <SigninCP/>,
            exact: true,
            isPrivate: true,
        },
    ]
}