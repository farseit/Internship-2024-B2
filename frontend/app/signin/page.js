"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
// import { useAuth } from "../authcontext";
import Link from "next/link";
import {
  SignInFailure,
  SignInStart,
  SignInSuccess,
} from "@/lib/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import OAuth from "../OAuth/OAuth";
import Cookies from "js-cookie";

const SignIn = () => {
  // const { login } = useAuth();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (formData.email.trim() === "") {
      isValid = false;
      return dispatch(SignInFailure("Please fill all the fields"));
    }

    if (formData.password.trim() === "") {
      isValid = false;
      return dispatch(SignInFailure("Password is required"));
    }

    if (!isValid) {
      setFormErrors(newFormErrors);
      return;
    }

    try {
      dispatch(SignInStart());
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        {
          username: formData.email,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      const data = response.data;
      const accessToken = data.accessToken;
      console.log("data", data);
      console.log("accessToken", accessToken);

      if (data.success === false) {
        dispatch(SignInFailure(data.message));
        return;
      }

      if (data.error === "PasswordMismatchError") {
        setPasswordError("Incorrect password. Please try again.");
        setEmailError("");
      } else if (data.error === "EmailMismatchError") {
        setEmailError("Email and password do not match. Please try again.");
        setPasswordError("");
      } else {
        Cookies.set("accessToken", accessToken, {
          expires: 1 / 24,
        });

        Cookies.set("refreshToken", data.refreshToken, {
          expires: 1 / 24,
        });
        dispatch(SignInSuccess(data));
        router.push("/Dashboard");
      }
    } catch (error) {
      dispatch(SignInFailure(error.message));
      setGeneralError("There was an error logging you in. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#a1b0af] to-[#beebe9]">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-[#006266] text-center">
          Login
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Email:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none ${
                formErrors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`w-full p-3 border rounded-md focus:outline-none ${
                formErrors.password ? "border-red-500" : "border-gray-300"
              }`}
            />

            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
            {passwordError && (
              <p className="text-red-500 text-sm mt-1">{passwordError}</p>
            )}
            {generalError && (
              <p className="text-red-500 text-sm mt-1">{generalError}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#006266] text-white px-4 py-2 w-full rounded-full hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
          <OAuth />
        </form>
        <Link href="/signup">
          <h6 className="text-[#006266] text-center mt-3 ">
            Don't have an account?{" "}
            <span className="font-semibold">Signup here.</span>
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
