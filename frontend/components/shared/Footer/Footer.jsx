"use client";
import Image from "next/image";
import React, { useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";
import { Divider } from "@mui/material";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.name.value;
    console.log(email);
  };

  return (
    <footer className="bg-[#181818] text-[#838790] p-6 md:p-12 lg:p-24 pb-24 md:pb-28 lg:pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* part-1 */}
        <div className="space-y-4 col-span-1">
          <Image
            src="/img/logo.png"
            height={65}
            width={146}
            alt="logo"
            className=""
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
          <div className="space-y-3">
            <p className="flex gap-2 items-center">
              <SlLocationPin className="text-white" />
              <span>1234 Heaven Stress, Beverly Hill, Australia</span>
            </p>
            <p className="flex gap-2 items-center">
              <LuPhoneCall className="text-white" />
              <span>(800) 123 456 789</span>
            </p>
            <p className="flex gap-2 items-center">
              <MdOutlineEmail className="text-white" />
              <span>example@email.com</span>
            </p>
          </div>
          <div className="flex gap-2">
            <Link href="https://www.facebook.com/">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#222224] hover:bg-[#2FB261] text-white duration-300">
                <FaFacebookF />
              </span>
            </Link>
            <Link href="https://www.twitter.com/">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#222224] hover:bg-[#2FB261] text-white duration-300">
                <FaTwitter />
              </span>
            </Link>
            <Link href="https://www.youtube.com/">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#222224] hover:bg-[#2FB261] text-white duration-300">
                <FaYoutube />
              </span>
            </Link>
            <Link href="https://www.linkedin.com/">
              <span className="flex justify-center items-center w-[40px] h-[40px] bg-[#222224] hover:bg-[#2FB261] text-white duration-300">
                <FaLinkedinIn />
              </span>
            </Link>
          </div>
        </div>
        {/* part-2 */}
        <div className="space-y-4 col-span-1">
          <h2 className="text-white text-2xl font-bold">NEWSLETTER</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className={`w-full p-3 border rounded-[10px] focus:outline-none bg-transparent`}
              />
            </div>
            <button
              type="submit"
              className=" active:scale-95 bg-[#2FB261] hover:bg-[#248b4c] text-white text-xl uppercase px-4 py-2 w-full mt-4 rounded-[10px]  transition duration-300 "
            >
              Subscribe
            </button>
          </form>
          <Image
            src="/img/payment_method.png"
            width={325}
            height={32}
            alt="payment method"
          />
        </div>
        {/* Part-3 */}
        <div className="col-span-1 md:col-span-2  lg:col-span-1 grid gird-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold">LINKS</h2>
            <div className="flex flex-col gap-2">
              <Link href={"/"} className="text-base hover:underline">
                Home
              </Link>
              <Link href={"/about-us"} className="text-base hover:underline">
                About Us
              </Link>
              <Link href={"/shop"} className="text-base hover:underline">
                Shop
              </Link>
              <Link href={"/blog"} className="text-base hover:underline">
                Blog
              </Link>
              <Link href={"/contact-us"} className="text-base hover:underline">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-white text-2xl font-bold ">Help/Support</h2>
            <div className="flex flex-col gap-2">
              <Link href={"/"} className="text-base hover:underline ">
                FAQ
              </Link>
              <Link href={"/"} className="text-base hover:underline inline">
                Shipping Info
              </Link>
              <Link href={"/"} className="text-base hover:underline inline">
                Returns
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <Divider style={{ borderColor: "#838790" }} />
      </div>
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        <span className="text-white">2024 - Design & Copyright By Trendy </span>
        <div className="flex flex-col md:flex-row gap-5">
          <span className="text-base hover:underline">Privacy Policy</span>
          <span className="text-base hover:underline">Terms of Service</span>
          <span className="text-base hover:underline">Cookies Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
