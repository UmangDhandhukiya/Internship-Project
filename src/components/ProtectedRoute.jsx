import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { addUser, removeUser } from "../utills/UserSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/profile/view", {
          method: "GET",
          credentials: "include",
        });

        if (res.ok) {
          const data = await res.json();
          dispatch(addUser(data.data));
        } else {
          dispatch(removeUser());
        }
      } catch (err) {
        dispatch(removeUser());
      } finally {
        setLoading(false);
      }
    };

    // only check if store.user is empty
    if (!user) checkAuth();
    else setLoading(false);
  }, [dispatch, user]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
