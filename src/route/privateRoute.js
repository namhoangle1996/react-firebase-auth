import React from "react";
import {Redirect} from "react-router-dom";
import {Route} from "react-router-dom";

export default function PrivateRoute({ component: Component, authenticated, ...restParams }) {
    console.log({...restParams})
    return (
        <Route
            {...restParams}
            render={() => authenticated === true
                ? <Component {...restParams} />
                : <Redirect to={{ pathname: '/login', state: { from: restParams.location } }} />}
        />
    )
}
