import { Navigate, Outlet, Route } from "react-router-dom";
import { BrowserRouter, Router } from "react-router-dom"

const PrivateRoutesblock = ({  component: Component, isLogged, ...rest}) => (
    <Route 
    {...rest}
    render={props => isLogged ? (
        <Component {...props}/>
    ) : (<Navigate to={'/Registro'}/>
    
    )
 }
 />
    
);

export default PrivateRoutesblock;