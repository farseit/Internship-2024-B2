"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    let newErrors = { email: "", password: "" };

    // Validation
    if (!email) newErrors.email = "Email or Phone Number is required.";
    if (!password) newErrors.password = "Password is required.";

    if (newErrors.username || newErrors.password) {
      setErrors(newErrors);
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/login`,
        { username: formData.email, password: formData.password },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      // Handle success (e.g., redirect or show success message)
      console.log(response.data);
    } catch (error) {
      // Handle error (e.g., show error message)
      console.error(error);
      setErrors({
        ...errors,
        general: "Login failed. Please check your credentials.",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className=" absolute">
        <Image
          src="/img/Display/background_auth.png"
          alt="alt"
          width={1440}
          height={1440}
          className="h-screen w-screen blur-sm"
        />
      </div>
      <div className=" relative h-screen flex items-center ">
        <div className=" info-container flex flex-col justify-between mx-[3%] bg-white shadow-lx md:min-h-[800px] max-h-[845px] max-w-[716px] w-full px-[8%] py-[3%] rounded-2xl md:rounded-[40px] border-[1px]">
          <h1 className="md:text-[36px] text-[26px] font-semibold w-full flex justify-center text-[#192a56] mb-9 md:mb-0 ">
            Welcome
          </h1>
          <div className=" md:text-[20px] flex flex-col w-full items-start gap-2">
            <div className="relative w-full">
              <label htmlFor="">Email or Phone Number</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your Email or Phone Number"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative w-full">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className=" border h-[55px] rounded-[10px] w-full px-4 text-[16px] pr-12"
                id="password"
              />

              {/* Toggle Button */}
              <button
                type="button"
                className=" absolute right-4 top-[58px] translate-y-[-80%] md:translate-y-[-50%] text-gray-600"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <Image
                    src="/img/icons/open_eye.svg"
                    alt="alt"
                    width={20}
                    height={20}
                  />
                ) : (
                  <Image
                    src="/img/icons/closed_eye.svg"
                    alt="alt"
                    width={20}
                    height={20}
                  />
                )}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>
          </div>
          <div className="flex justify-between md:text-[20px] mt-10 md:mt-0">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                id=""
                name=""
                value=""
                className="w-5 h-5"
                style={{
                  width: "20px",
                  height: "20px",
                  accentColor: "green",
                  WebkitAppearance: "checkbox",
                  color: "white",
                }}
              />
              <label for="vehicle1">Remember Me</label>
            </div>
            <Link href={"/"} className="text-gray-400">
              Forgot password?
            </Link>
          </div>
          <div className="text-[24px] text-white bg-[#192a56] h-[55px] rounded-[10px] my-10 md:my-0">
            <button
              type="submit"
              onClick={handleSubmit}
              className="w-full flex justify-center items-center h-full"
            >
              Signup
            </button>
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}
          </div>
          <div className="flex gap-2 items-center md:text-[20px]">
            <span className="w-full h-[1px] bg-black"></span>
            <span>or</span>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
          <div className="flex justify-center gap-10 my-10 md:my-0  items-center">
            <button>
              <Image
                src="/img/icons/social/_google.png"
                alt="alt"
                width={30}
                height={30}
                className="min-w-[45px] min-h-[46px]"
              />
            </button>
            <button>
              <Image
                src="/img/icons/social/_email.png"
                alt="alt"
                width={30}
                height={30}
                className="min-w-[50px] min-h-[37.45px]"
              />
            </button>
            <button>
              <Image
                src="/img/icons/social/_facebook.png"
                alt="alt"
                width={30}
                height={30}
                className="min-w-[60px] min-h-[60px]"
              />
            </button>
          </div>
          <div className="w-full flex justify-center">
            Don’t have any account?{" "}
            <Link className="text-[#192a56]" href={"/signup"}>
              Sing up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
