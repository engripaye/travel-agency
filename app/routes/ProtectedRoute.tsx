import { Navigate } from "react-router-dom";

const isAuthenticated = true;

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;