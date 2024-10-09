"use client";
import React, { useEffect, useState } from "react";
import {
  faBars,
  faMagnifyingGlass,
  faArrowTrendUp,
  faCartShopping,
  faGift,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
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
    // You can also add redirect to the sign-in page or home page after logout
  };
  return (
    <div className="bg-primary text-white w-full h-[57px] md:h-20 grid place-items-center px-3">
      <nav className="container flex items-center justify-between h-full gap-8 lg:gap-14">
        <div className="flex items-center justify-between gap-6 grow">
          <button className="flex flex-col items-center justify-center w-16 text-3xl h-7 md:text-4xl lg:hidden">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link href="#" className="w-[100px] md:w-[125px] relative h-full">
            <Image src={Logo} alt="Logo" width={250} height={250} priority />
          </Link>
          <div className="relative hidden grow lg:block">
            <form
              action="#"
              method="post"
              className="flex items-center h-8 overflow-hidden text-black bg-white rounded md:h-10"
            >
              <label className="sr-only">search</label>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search"
                className="h-full px-4 border-none outline-none grow focus:ring-transparent "
              />
              <button
                type="submit"
                className="h-full px-3 text-2xl outline-none text-primary"
              >
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="w-4 text-black"
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
          <ul className="flex items-center justify-around gap-4 list-none md:gap-6 lg:gap-8">
            <li>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 lg:flex-row"
              >
                <div>
                  <FontAwesomeIcon icon={faGift} className="w-5 h-5" />
                </div>
                <div className="text-white">
                  <p className="font-semibold text-2xs md:text-sm">Offers</p>
                  <p className="text-xs mt-[-1px] hidden lg:block">
                    Latest Offers
                  </p>
                </div>
              </Link>
            </li>
            <li>
              <AddToCartPart />
            </li>
            <li>
              <Link
                href="#"
                className="flex flex-col items-center gap-2 lg:flex-row"
              >
                <div>
                  <FontAwesomeIcon icon={faArrowTrendUp} className="w-5 h-5" />
                </div>
                <div className="text-white">
                  <p className="font-semibold text-2xs md:text-sm">
                    New Arrivals
                  </p>
                  <p className="text-xs mt-[-1px] hidden lg:block">
                    Fashion Trends
                  </p>
                </div>
              </Link>
            </li>
            {accessToken ? (
              <li className="flex flex-col items-center gap-2 lg:flex-row">
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
              <li>
                <Link
                  href="/signin"
                  className="flex flex-col items-center gap-2 lg:flex-row"
                >
                  <div>
                    <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
                  </div>
                  <div className="text-white">
                    <p className="font-semibold text-2xs md:text-sm">Account</p>
                    <p className="text-xs mt-[-1px] hidden lg:block ">
                      Register or Login
                    </p>
                  </div>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HeaderContent;
