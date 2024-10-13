import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const HeaderContact = () => {
  return (
    <div className="flex justify-between  text-gray-600 text-xs py-3 container max-w-[89%]">
      <div className="flex gap-2">
        <span>🇺🇸</span>
        <span>English</span>
        <span className="text-xs">⌄</span>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <FontAwesomeIcon icon={faPhone} className="w-3 mr-2" />
          <span>Helpline +8801712345678</span>
        </div>
        <span>|</span>
        <Link href="href" className="hover:text-blue-800">
          My panel
        </Link>
        <span>|</span>
        <Link href="href" className="hover:text-red-800">
          Logout
        </Link>
      </div>
      {/* <div className="flex gap-2.5">
        <FontAwesomeIcon icon={faFacebook} className="w-4" />
        <FontAwesomeIcon icon={faInstagram} className="w-4" />
        <FontAwesomeIcon icon={faYoutube} className="w-4" />
        <FontAwesomeIcon icon={faTwitter} className="w-4" />
        <FontAwesomeIcon icon={faLinkedin} className="w-4" />
      </div> */}
    </div>
  );
};

export default HeaderContact;
