"use client";
import React, { useState } from "react";
import { FiEyeOff } from "react-icons/fi";

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
import Checkbox from "@mui/material/Checkbox";
import Divider from "@mui/material/Divider";
import Image from "next/image";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

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
    <section className="grid lg:grid-cols-2 max-h-screen">
      <div className="hidden md:block">
        <Image
          src="/img/signin.png"
          width={600}
          height={800}
          alt="signin image"
          className="w-full "
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sing In Your Account
          </h2>
          <span className="block text-[#9F9F9F] text-xl text-center mb-6">
            Please enter your details
          </span>
          <div className="mb-2">
            <OAuth />
          </div>
          <Divider className="mb-6">OR</Divider>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full p-3 border rounded-md focus:outline-none ${
                  formErrors.email ? "border-red-500" : "border-[#E8E8F2]"
                }`}
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>
            <div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full text-base p-3 placeholder-shown:text-sm border rounded-md focus:outline-none ${
                    formErrors.password ? "border-red-500" : "border-[#E8E8F2]"
                  }`}
                />
                <FiEyeOff className="absolute opacity-50 right-3 top-1/2 -translate-y-1/2 text-xl" />
              </div>

              {formErrors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.password}
                </p>
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
            {/* Remember & Forget */}
            <div className="flex justify-between items-center">
              <Checkbox
                {...label}
                defaultChecked
                sx={{
                  color: "#2FB261",
                  "&.Mui-checked": {
                    color: "#2FB261",
                  },
                }}
              />
              <span>
                <small>
                  <Link href={"#"}>Forget Password?</Link>
                </small>
              </span>
            </div>
            <button
              type="submit"
              className=" bg-[#2FB261] hover:bg-[#248b4c] text-white text-xl uppercase px-4 py-2 w-full rounded-[10px]  transition duration-300 mt-6"
            >
              Sign in
            </button>
          </form>
          <Link href="/signup">
            <h6 className="text-center mt-3 font-bold text-xl ">
              Don't have an account?{" "}
              <span className=" text-[#2FB261]">Sign Up</span>
            </h6>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
