import { Camera, Github, Twitter,Linkedin} from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer
      className={`py-8 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-gray-100 text-gray-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Camera className="h-6 w-6 mr-2" />
            <span className="text-lg font-serif"> Aaradhya visionary photography</span>
          </div>

          <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 mb-4 md:mb-0">
            <Link to="/" className="hover:underline">
              Home
            </Link>
            <Link to="/portfolio" className="hover:underline">
              Portfolio
            </Link>
            <Link to="/about" className="hover:underline">
              About
            </Link>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Vishnujaisri123"
              className="transition-colors hover:text-blue-500"
              aria-label="github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://x.com/VishnuV09741442"
              className="transition-colors hover:text-blue-500"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jai-sri-shankara-vishnu-vardhan-keta-1b9070364/"
              className="transition-colors hover:text-blue-500"
              aria-label="Linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Visionary Photography. Crafted &
            Managed by Vishnu Vardhan | All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
