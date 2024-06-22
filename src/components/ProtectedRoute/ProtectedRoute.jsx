import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, redirect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate(redirect, { state: { backNavigate: location.pathname } });
    }
  }, [token]);

  if (token) return children;
};

export default ProtectedRoute;
