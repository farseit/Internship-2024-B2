"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

const SignUp = () => {
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    retypePassword: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  console.log(formData);
  const [retypePassword, setRetypePassword] = useState("");
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    retypePassword: "",
    general: "",
  });

  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;
    let newErrors = {
      name: "",
      email: "",
      password: "",
      retypePassword: "",
    };

    // Validation
    if (!name) newErrors.name = "name is required.";
    if (!email) newErrors.email = "Email or Phone Number is required.";
    if (!password) newErrors.password = "Password is required.";
    if (password !== retypePassword)
      newErrors.retypePassword = "Passwords do not match.";

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password ||
      newErrors.retypePassword
    ) {
      setErrors(newErrors);
      return;
    }

    // Dummy data
    const defaultPicture = "/img/default.png";
    const address = "123 Dummy Street";
    const phone = "0000000000";
    const role = "user";

    // Creating form data
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("defaultPicture", defaultPicture);
    formDataToSend.append("address", address);
    formDataToSend.append("phone", phone);
    formDataToSend.append("role", role);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`,
        formDataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error(error);
      setErrors({
        ...errors,
        general: "Signup failed. Please try again.",
      });
    }
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
        <div className="info-container flex flex-col justify-between mx-[3%] bg-white shadow-lx md:min-h-[800px] max-h-[845px] max-w-[716px] w-full px-[8%] py-[3%] rounded-2xl md:rounded-[40px] border-[1px]">
          <h1 className="md:text-[36px] text-[26px] font-semibold w-full flex justify-center text-[#192a56] mb-9 md:mb-0 ">
            Create Account
          </h1>
          <div className="md:text-[20px] flex flex-col w-full items-start gap-2">
            <div className="relative w-full">
              <label htmlFor="">Username</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your username"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px]"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
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
                type={passwordVisibility.password ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px] pr-12"
                id="password"
              />
              <button
                type="button"
                className="absolute right-4 top-[58px] translate-y-[-80%] md:translate-y-[-50%] text-gray-600"
                onClick={() => togglePasswordVisibility("password")}
              >
                {passwordVisibility.password ? (
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
            <div className="relative w-full">
              <label htmlFor="retypePassword">Retype Password</label>
              <input
                type={passwordVisibility.retypePassword ? "text" : "password"}
                name="retypePassword"
                value={retypePassword}
                onChange={(e) => {
                  setRetypePassword(e.target.value);
                  setErrors({
                    ...errors,
                    [e.target.name]: "",
                  });
                }}
                placeholder="Enter your Retype password"
                className="border h-[55px] rounded-[10px] w-full px-4 text-[16px] pr-12"
                id="retypePassword"
              />
              <button
                type="button"
                className="absolute right-4 top-[58px] translate-y-[-80%] md:translate-y-[-50%] text-gray-600"
                onClick={() => togglePasswordVisibility("retypePassword")}
              >
                {passwordVisibility.retypePassword ? (
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
              {errors.retypePassword && (
                <p className="text-red-500 text-sm">{errors.retypePassword}</p>
              )}
            </div>
            <div className="text-[24px] text-white w-full bg-[#192a56] h-[55px] rounded-[10px] my-10 md:my-5">
              <button
                type="submit"
                className="w-full flex justify-center items-center h-full"
                onClick={handleSubmit}
              >
                Signup
              </button>
            </div>
            {errors.general && (
              <p className="text-red-500 text-sm">{errors.general}</p>
            )}
          </div>
          <div className="flex gap-2 items-center">
            <span className="w-full h-[1px] bg-black"></span>
            <span>or</span>
            <span className="w-full h-[1px] bg-black"></span>
          </div>
          <div className="flex justify-center gap-10 my-10 md:my-0 px-28 items-center">
            <Image
              src="/img/icons/social/_google.png"
              alt="alt"
              width={30}
              height={30}
              className="md:w-[45px] md:h-[46px]"
            />
            <Image
              src="/img/icons/social/_email.png"
              alt="alt"
              width={30}
              height={30}
              className="md:w-[50px] md:h-[37.45px]"
            />
            <Image
              src="/img/icons/social/_facebook.png"
              alt="alt"
              width={30}
              height={30}
              className="md:w-[60px] md:h-[60px]"
            />
          </div>
          <div className="w-full flex justify-center">
            Already have an account?{" "}
            <Link className="text-[#192a56]" href={"/signin"}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
