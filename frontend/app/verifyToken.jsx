import axios from "axios";
import Cookies from "js-cookie"; // Make sure to replace this with the actual library you're using for cookies

const verifyToken = async () => {
  let accesstoken = Cookies.get("accessToken", null);
  let refresh = Cookies.get("refreshToken", null);
  console.log("verify", accesstoken);

  if (accesstoken != null) {
    try {
      const response = await axios.get(
        process.env.REACT_APP_BASE_URL + "/api/token/custom_verify",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        }
      );

      if (response.status === 200) {
        return accesstoken;
      } else {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
      }
    } catch (error) {
      Cookies.remove("accessToken");
    }
  }
  if (Cookies.get("refreshToken")) {
    try {
      const response = await axios.post(
        process.env.REACT_APP_BASE_URL + "/api/token/refresh",
        {
          refresh: refresh,
        }
      );

      // Cookies.remove('refreshToken');
      Cookies.set("accessToken", response.data.access, {
        expires: 1 / (24 * 60),
      });

      return response.data.access;
    } catch (error) {
      return null;
    }
  }
};

export default verifyToken;
