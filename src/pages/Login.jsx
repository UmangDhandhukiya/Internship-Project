"use client"
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../utills/UserSlice";

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-center text-emerald-700 mb-6">
          Login
        </h1>

        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                credentials: "include", // keep cookies for auth
                body: JSON.stringify(values),
              });

              const data = await response.json();

              if (!response.ok) {
                setError(data.message || "Login failed");
                return;
              }

              // save user in redux
              dispatch(addUser(data.user));

              // redirect after success
              navigate("/");
            } catch (err) {
              setError("Server error. Please try again later.");
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-5">
              {/* Email */}
              <div>
                <Field
                  className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <Field
                  className="w-full px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Error Message */}
              {error && <p className="text-red-600 text-sm">{error}</p>}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-800 transition-colors duration-200 text-sm font-medium"
              >
                {isSubmitting ? "Logging in..." : "Login"}
              </button>

              {/* Extra Links */}
              <p className="text-sm text-gray-600 text-center mt-3">
                Don’t have an account?{" "}
                <Link
                  to="/register"
                  className="text-emerald-700 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
