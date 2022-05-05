import React from "react";
import SigninCP from "../modules/Auth/signin/SigninCP";
// import PanelLayout from "../layouts/panel/PanelLayout.jsx";
// import AuthLayout from "../layouts/auth/AuthLayout.jsx";
// import OutLayout from "../layouts/out/OutLayout.jsx";
// import Storage from "../core/services/Storage";
// import {bake_cookie} from 'sfcookies'


export default function MyRoute({
                                    element,
                                    isPrivate,
                                    module,
                                    route,
                                    ...rest
                                }) {

    // let signed = false;
    // let firstCharacter = module.name.charAt(0).toUpperCase();
    // let anyCharacter = module.name.substring(1, module.length);
    // let moduleName = firstCharacter + anyCharacter + 'Layout';

    // init layouts
    // const layoutArr = {'AuthLayout': AuthLayout, 'PanelLayout': PanelLayout, 'OutLayout': OutLayout};
    //const Layout = layoutArr[moduleName];
    // const Layout = 'auth';


    // if (Storage.isLogin()) {
    //     signed = true;
    // }

    /**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */
    // if (isPrivate && !signed) {
    //     return <Redirect to="/auth"/>;
    // }

    return (
        <SigninCP/>
    );
}

{/*<Route*/
}
{/*    {...rest}*/
}
{/*    render={props => (*/
}
{/*        <Layout route={route}>*/
}
{/*            <Component   {...props} />*/
}
{/*        </Layout>*/
}
{/*    )}*/
}
{/*/>*/
}
