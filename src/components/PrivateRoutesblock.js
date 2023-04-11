import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutesblock({ isLogged }) {
    isLogged = true;
  return isLogged ? <Outlet /> : <Navigate to="/Registro" />;
}

export default PrivateRoutesblock;