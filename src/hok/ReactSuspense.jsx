import React from "react";


export const withReactSuspense = (Component) => {
    return (props) => {
        return <React.Suspense fallback={<strong><h2>...Loading</h2></strong>}>
            <Component{...props}/>
        </React.Suspense>
    }
};


// let ConnectedAuthRedirectComponent;
// return ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);