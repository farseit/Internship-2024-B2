// "use client";

// import React, { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// const Signup = () => {
//   const [emailError, setEmailError] = useState("");
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//     password: "",
//     role: "",
//     registration_date: "", // Added registration_date field
//     Image: "",
//   });

//   const [formErrors, setFormErrors] = useState({
//     name: "",
//     email: "",
//     address: "",
//     phone: "",
//     password: "",
//     role: "",
//     registration_date: "",
//     Image: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setFormErrors({
//       ...formErrors,
//       [name]: "",
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let isValid = true;
//     const newFormErrors = { ...formErrors };

//     if (formData.name.trim() === "") {
//       newFormErrors.name = "Name is required";
//       isValid = false;
//     } else {
//       const minNameLength = 2;
//       const maxNameLength = 150;

//       if (
//         formData.name.trim().length < minNameLength ||
//         formData.name.trim().length > maxNameLength
//       ) {
//         newFormErrors.name = `Name must be between ${minNameLength} and ${maxNameLength} characters`;
//         isValid = false;
//       }
//     }

//     if (formData.email.trim() === "") {
//       newFormErrors.email = "Email is required";
//       isValid = false;
//     } else {
//       if (!/\S+@\S+\.\S+/.test(formData.email)) {
//         newFormErrors.email = "Invalid email format";
//         isValid = false;
//       }

//       const maxEmailLength = 150;
//       if (formData.email.trim().length > maxEmailLength) {
//         newFormErrors.email = `Email must be ${maxEmailLength} characters or less`;
//         isValid = false;
//       }
//     }

//     if (formData.address.trim() === "") {
//       newFormErrors.address = "Address is required";
//       isValid = false;
//     }

//     const phoneNumberRegex = /^\d{10,15}$/;

//     if (formData.phone.trim() === "") {
//       newFormErrors.phone = "Phone number is required";
//       isValid = false;
//     } else if (!phoneNumberRegex.test(formData.phone.trim())) {
//       newFormErrors.phone = "Invalid phone number format";
//       isValid = false;
//     }

//     if (formData.password.trim() === "") {
//       newFormErrors.password = "Password is required";
//       isValid = false;
//     } else if (formData.password.length < 6) {
//       newFormErrors.password = "Password must be at least 6 characters long";
//       isValid = false;
//     }

//     if (formData.role.trim() === "") {
//       newFormErrors.role = "Role is required";
//       isValid = false;
//     }

//     // Validate registration_date
//     if (formData.registration_date.trim() === "") {
//       newFormErrors.registration_date = "Registration date is required";
//       isValid = false;
//     }

//     if (isValid) {
//       try {
//         const response = await axios.post(
//           `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`,
//           {
//             name: formData.name,
//             email: formData.email,
//             address: formData.address,
//             phone: formData.phone,
//             password: formData.password,
//             role: formData.role,
//             registration_date: formData.registration_date, // Include registration_date in the request body
//             Image: formData.Image,
//           },
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         );
//         if (response.status === 201) {
//           router.push("/signin");
//         } else {
//           console.error("Unexpected response:", response);
//         }
//       } catch (error) {
//         console.error("Error during signup:", error.response || error.message);
//         if (
//           error.response &&
//           error.response.data &&
//           error.response.data.message
//         ) {
//           setFormErrors({
//             ...newFormErrors,
//             general: error.response.data.message,
//           });
//         } else {
//           setFormErrors({
//             ...newFormErrors,
//             general: "An unexpected error occurred. Please try again later.",
//           });
//         }
//       }
//     } else {
//       setFormErrors(newFormErrors);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
//       <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Sign Up
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.name && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.email && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Address:</label>
//             <input
//               type="text"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.address && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Phone:</label>
//             <input
//               type="text"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.phone && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.password && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Role:</label>
//             <input
//               type="text"
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.role && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.role}</p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Registration Date:</label>
//             <input
//               type="date"
//               name="registration_date"
//               value={formData.registration_date}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.registration_date && (
//               <p className="text-red-500 text-sm mt-1">
//                 {formErrors.registration_date}
//               </p>
//             )}
//           </div>
//           <div>
//             <label className="block text-gray-700">Image URL:</label>
//             <input
//               type="text"
//               name="Image"
//               value={formData.Image}
//               onChange={handleChange}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
//             />
//             {formErrors.Image && (
//               <p className="text-red-500 text-sm mt-1">{formErrors.Image}</p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
//           >
//             Sign Up
//           </button>
//         </form>
//         <p className="mt-6 text-center text-gray-600">
//           Already have an account?{" "}
//           {/* <Link href="/login">
//             <a className="text-blue-500 hover:underline">Login</a>
//           </a> */}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Signup;

// pages/_app.js

// pages/signup.js
"use client";

import React, { useState } from "react";
import axios from "axios";

import { useRouter } from "next/navigation";

import {
  RegisterStart,
  RegisterSuccess,
  RegisterFailure,
} from "@/lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/lib/features/hooks";
import Link from "next/link";
import OAuth from "../OAuth/OAuth";
import { FiEyeOff } from "react-icons/fi";
import { Divider } from "@mui/material";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.user);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirm_password: "",
    role: "",
    registration_date: "",
    Image: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: "",
    confirm_password: "",
    role: "",
    registration_date: "",
    Image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({
      ...formErrors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;
    const newFormErrors = { ...formErrors };

    if (formData.name.trim() === "") {
      newFormErrors.name = "Name is required";
      isValid = false;
    } else {
      const minNameLength = 2;
      const maxNameLength = 150;
      if (
        formData.name.trim().length < minNameLength ||
        formData.name.trim().length > maxNameLength
      ) {
        newFormErrors.name = `Name must be between ${minNameLength} and ${maxNameLength} characters`;
        isValid = false;
      }
    }

    if (formData.email.trim() === "") {
      newFormErrors.email = "Email is required";
      isValid = false;
    } else {
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newFormErrors.email = "Invalid email format";
        isValid = false;
      }

      const maxEmailLength = 150;
      if (formData.email.trim().length > maxEmailLength) {
        newFormErrors.email = `Email must be ${maxEmailLength} characters or less`;
        isValid = false;
      }
    }

    if (formData.address.trim() === "") {
      newFormErrors.address = "Address is required";
      isValid = false;
    }

    const phoneNumberRegex = /^\d{10,15}$/;
    if (formData.phone.trim() === "") {
      newFormErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneNumberRegex.test(formData.phone.trim())) {
      newFormErrors.phone = "Invalid phone number format";
      isValid = false;
    }

    if (formData.password.trim() === "") {
      newFormErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newFormErrors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (formData.role.trim() === "") {
      newFormErrors.role = "Role is required";
      isValid = false;
    }

    if (formData.registration_date.trim() === "") {
      newFormErrors.registration_date = "Registration date is required";
      isValid = false;
    }
    if (formData.confirm_password.trim() === "") {
      newFormErrors.confirm_password = "Confirm Password is required";
    }

    if (isValid) {
      dispatch(RegisterStart());
      try {
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/signup`,
          {
            name: formData.name,
            email: formData.email,
            password: formData.password,
            confirm_password: formData.confirm_password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 201) {
          dispatch(RegisterSuccess(response.data));
          router.push("/signin");
        } else {
          console.error("Unexpected response:", response);
          dispatch(RegisterFailure("Unexpected response from server"));
        }
      } catch (error) {
        console.error("Error during signup:", error.response || error.message);
        dispatch(
          RegisterFailure(
            error.response
              ? error.response.data.message
              : "An unexpected error occurred. Please try again later."
          )
        );
      }
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8  ">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Create Your Account
        </h2>
        <div className="mb-2">
          <OAuth />
        </div>
        <Divider className="mb-6">OR</Divider>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="absolute opacity-50 right-3 top-1/2 -translate-y-1/2 ">
                <FiEyeOff className="text-xl" />
              </div>
            </div>
            {formErrors.password && (
              <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>
            )}
          </div>
          <div>
            <div className="relative">
              <input
                type="password"
                name="confirm_password"
                value={formData.confirm_password}
                onChange={handleChange}
                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              />
              <div className="absolute opacity-50 right-3 top-1/2 -translate-y-1/2 ">
                <FiEyeOff className="text-xl" />
              </div>
            </div>
            {formErrors.confirm_password && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.confirm_password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className=" bg-[#2FB261] hover:bg-[#248b4c] text-white text-xl uppercase px-4 py-2 w-full rounded-[10px]  transition duration-300 mt-6"
            disabled={loading}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
        <Link href="/signin">
          <h6 className="text-center mt-3 font-bold text-xl">
            Already have an account?{" "}
            <span className=" text-[#2FB261]">Sign In</span>
          </h6>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
