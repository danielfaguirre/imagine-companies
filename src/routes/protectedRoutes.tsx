import { UserType } from "../modules/Auth/models";
import { Routes } from "./models";
import { Navigate } from "react-router-dom";

export type ProtectedRoutesType = {
  user?: UserType;
  children: JSX.Element;
};

const ProtectedRoute = ({ user, children }: ProtectedRoutesType) => {
  if (!user) {
    return <Navigate to={Routes.LOGIN} replace />;
  }
  return children;
};

export default ProtectedRoute;
