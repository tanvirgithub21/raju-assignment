import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser } = useContext(FirebaseAuth);
  const [user, loading] = currentUser;

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
