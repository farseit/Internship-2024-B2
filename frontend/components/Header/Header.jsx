import HeaderContact from "./HeaderContact";
import HeaderContent from "./HeaderContent";
import HeaderNavbar from "./HeaderNavbar";
import Navbar from "../Hero/Categories";

const Header = () => {
  return (
    <>
      <div className="flex justify-center bg-white">
        <HeaderContact />
      </div>
      <header className="sticky top-0 z-50 ">
        <HeaderContent />
        {/* <Navbar /> */}
        <HeaderNavbar />
      </header>
    </>
  );
};

export default Header;
