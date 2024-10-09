"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie"; // Ensure this path is correct

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const verifyAccessToken = async () => {
      const accessToken = Cookies.get("accessToken");
      console.log("dashboard token", accessToken); // Use 'accessToken' correctly

      if (!accessToken) {
        router.push("/signin"); // Redirect to the login page if access token is null
      } else {
        console.log("Dashboard page is loaded");
      }
    };

    verifyAccessToken();
  }, [router]);

  return <div>Dashboard</div>;
};

export default Dashboard;
