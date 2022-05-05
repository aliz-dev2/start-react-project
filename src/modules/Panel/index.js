import ReportCP from "./report/ReportCP";
import React from "react";

export default {
    routeProps: [
        {
            path: '/report',
            element: <ReportCP/>,
            exact: true,
            isPrivate: true,
        },
    ]
}