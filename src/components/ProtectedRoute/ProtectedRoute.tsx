import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store";

interface Props {
  children: React.ReactNode;
  redirect: string;
}

const ProtectedRoute = ({ children, redirect }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const token = useAppSelector((state) => state.auth.token);

  useEffect(() => {
    if (!token) {
      navigate(redirect, { state: { backNavigate: location.pathname } });
    }
  }, [token]);

  if (token) return children;
};

export default ProtectedRoute;
