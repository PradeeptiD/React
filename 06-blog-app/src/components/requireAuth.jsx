//done
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function RequireAuth({ role }) {
    const { user } = useAuth();

    if (!user || user.role !== role) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}
