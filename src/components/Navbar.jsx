import logo from "../assets/LogoRehanMondal.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-16" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/rehanmondal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/rehan13"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/rehan.1320/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-125 transition-transform duration-300"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
