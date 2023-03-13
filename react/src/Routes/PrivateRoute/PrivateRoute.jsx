import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { FirebaseAuth } from "../../Context/FirebaseAuthProvider/FirebaseAuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { currentUser } = useContext(FirebaseAuth);
  const [user, loading] = currentUser;

  // const [user, setUser] = useState(true);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     console.log("user observing");
  //     setUser(currentUser);
  //     setLoading(false);
  //   });
  //   return () => unsubscribe();
  // }, []);

  console.log("in private route", user, loading);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
