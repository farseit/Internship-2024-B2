"use client";
import React, { useEffect, useState } from "react";
import {
  faBars,
  faMagnifyingGlass,
  faCartShopping,
  faGift,
  faUser,
  faSignOutAlt,
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/img/logo.png";
import AddToCartPart from "./addToCartPart";
import Cookies from "js-cookie";

const HeaderContent = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const token = Cookies.get("accessToken");
    setAccessToken(token);
    console.log("navbar token", token);
  }, []);

  console.log("token", accessToken);

  const handleLogout = () => {
    Cookies.remove("accessToken");
    setAccessToken(null);
  };
  return (
    <div className="bg-primary text-white w-full h-[57px] md:h-20 grid place-items-center px-3">
      <nav className="container flex items-center justify-between h-full gap-8 lg:gap-2 ">
        <div className="flex items-center justify-between  grow lg:pl-[30%]">
          <button className="flex flex-col items-center justify-center w-16 text-3xl h-7 md:text-4xl lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          {/* <Link href="#" className="w-[100px] md:w-[125px] relative h-full">
            <Image src={Logo} alt="Logo" width={250} height={250} priority />
          </Link> */}
          <div className="relative hidden grow lg:block">
            <form
              action="#"
              method="post"
              className="flex items-center h-8 overflow-hidden text-black bg-white  md:h-10"
            >
              <label className="sr-only">search</label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="I am Shopping for..."
                className="h-full px-4 border-none outline-none grow focus:ring-transparent "
              />
              <button
                type="submit"
                className="h-full px-5 text-2xl outline-none text-primary bg-orange-400 "
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="w-4 text-white  "
                />
              </button>
            </form>
          </div>
          <button className="text-3xl text-primary lg:hidden">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="w-4 text-black"
            />
          </button>
        </div>
        <div className="fixed bottom-0 left-0 right-0 w-full py-3 bg-black lg:relative lg:w-fit lg:py-0 lg:bg-transparent">
          <ul className="flex items-center justify-around gap-4 list-none md:gap-6 lg:gap-1">
            <li className="hover:bg-slate-200/15 px-1 py-2 rounded-lg duration-300 ">
              <Link
                href="#"
                className="flex flex-col items-center gap-1 lg:flex-row "
              >
                <div>
                  <FontAwesomeIcon icon={faSyncAlt} className="w-5 h-5" />
                </div>
                <div className="text-white ">
                  <p className="relative font-semibold text-2xs md:text-sm w-fit">
                    <span className="absolute grid w-5 h-5 text-xs font-bold text-red-100 bg-orange-400 rounded-full -top-2 -right-5 place-items-center">
                      {/* {items.length} */}0
                    </span>
                  </p>
                  <p className="text-xs mt-[-1px] hidden lg:block pt-4">
                    Compare
                  </p>
                </div>
              </Link>
            </li>
            {/* part-3 */}
            <li className="hover:bg-slate-200/15 px-2 py-2 rounded-lg duration-300 ">
              <Link
                href="#"
                className="flex flex-col items-center gap-1 lg:flex-row "
              >
                <div>
                  <FontAwesomeIcon icon={faHeart} className="w-5 h-5" />
                </div>
                <div className="text-white ">
                  <p className="relative font-semibold text-2xs md:text-sm w-fit">
                    <span className="absolute grid w-5 h-5 text-xs font-bold text-red-100 bg-orange-400 rounded-full -top-2 -right-5 place-items-center">
                      {/* {items.length} */}0
                    </span>
                  </p>
                  <p className="text-xs mt-[-1px] hidden lg:block pt-4">
                    Wishlist
                  </p>
                </div>
              </Link>
            </li>
            {/* part-2 */}
            <li className="hover:bg-slate-200/15 px-2 py-2 rounded-lg duration-300">
              <AddToCartPart />
            </li>
            {accessToken ? (
              <li className="flex flex-col items-center gap-2 lg:flex-row ">
                <div>
                  <Image
                    src="/path/to/profile/image.jpg" // Replace with actual path
                    alt="Profile"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 lg:flex-row text-white"
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="w-5 h-5" />
                  <span className="text-xs md:text-sm">Logout</span>
                </button>
              </li>
            ) : (
              //   <li className="hover:bg-slate-200/15 px-3 py-2 rounded-lg duration-300">
              //   <Link
              //     href="/signin"
              //     className="flex flex-col items-center gap-2 lg:flex-row"
              //   >
              //     <div>
              //       <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
              //     </div>
              //     <div className="text-white">
              //       <p className="font-semibold text-2xs md:text-sm">Account</p>
              //       <p className="text-xs mt-[-1px] hidden lg:block ">
              //         Register or Login
              //       </p>
              //     </div>
              //   </Link>
              // </li>
              <></>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderContent;
