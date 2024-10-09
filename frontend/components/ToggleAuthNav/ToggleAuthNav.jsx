"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/img/logo.png";

export default function ToggleAuthNav() {
  const pathname = usePathname();
  return (
    <>
      <div className="w-full  pt-2 flex items-center justify-center md:mt-16">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={250}
          className="bg-blue-950 rounded-md lg:w-32 lg:mb-1 mb-2"
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-gray-100  lg:mt-2">
        <div className="bg-white shadow-md rounded-tr-lg rounded-tl-lg h-fit lg:w-full w-[90%] max-w-md md:max-w-lg lg:max-w-xl mt-8 lg:mt-1 flex  items-center justify-center ">
          <Link
            href={"/Auth/signup"}
            className={
              pathname === "/Auth/signup"
                ? "flex w-[50%] border-r  justify-center p-5 font-semibold text-[#d73838] bg-[#e1d2d28c] hover:bg-[#e1d2d2c2] rounded-tl-lg  border-b-[#6a1717cd] border-b-2 transform transition-all duration-150 ease-in tracking-wide"
                : "flex w-[50%] justify-center p-5 text-[#192A56] hover:text-[#130b2efa] font-semibold border tracking-wide"
            }
          >
            JOIN
          </Link>
          <Link
            href={"/Auth/signin"}
            className={
              pathname === "/Auth/signin"
                ? "flex w-[50%] justify-center p-5 font-semibold text-[#d73838] bg-[#e1d2d28c] hover:bg-[#e1d2d2c2] rounded-tr-lg  border-b-[#6a1717cd] border-b-2 transform transition-all duration-150 ease-in tracking-wide"
                : "flex w-[50%] justify-center p-5 text-[#192A56] hover:text-[#130b2efa] font-semibold border tracking-wide"
            }
          >
            SIGNIN
          </Link>
        </div>
      </div>
    </>
  );
}
