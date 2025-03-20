import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://linkedin.com/in/aniket-adhav" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Anix12"  Icon={FiGithub} />
      <SingleContactSocial link="https://www.instagram.com/aniket_xo._/?igsh=MmN2MmQzcGUzeDd0#"  Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
