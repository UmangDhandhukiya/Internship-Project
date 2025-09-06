import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utills/UserSlice";

const Layout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("http://localhost:3000/profile/view", {
          method: "GET",
          credentials: "include", // important for cookies
        });

        if (res.ok) {
          const data = await res.json();
          dispatch(addUser(data.data)); // save user into redux
        } else {
          dispatch(removeUser()); // clear user if not valid
        }
      } catch (err) {
        console.error("Auth check failed:", err);
        dispatch(removeUser());
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <div className="h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
