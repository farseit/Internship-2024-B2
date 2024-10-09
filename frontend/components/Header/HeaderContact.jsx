import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderContact = () => {
  return (
    <div className="flex justify-between text-white text-xs py-1 container max-w-[57%]">
      <div>Dhaka, Bangladesh</div>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faPhone} className="w-3 mr-2" />
        01712345678
      </div>
      <div className="flex gap-2.5">
        <FontAwesomeIcon icon={faFacebook} className="w-4" />
        <FontAwesomeIcon icon={faInstagram} className="w-4" />
        <FontAwesomeIcon icon={faYoutube} className="w-4" />
        <FontAwesomeIcon icon={faTwitter} className="w-4" />
        <FontAwesomeIcon icon={faLinkedin} className="w-4" />
      </div>
    </div>
  );
};

export default HeaderContact;
