import { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const [user, setUser] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     setUser((p) => !p);
  //   }, 5000);
  // }, []);
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};
