import { Link, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Camera, Moon, Sun, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? "bg-secondary-900/90 backdrop-blur-md shadow-lg"
            : "bg-white/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className={`h-8 w-8 text-primary-500`} />
            <span className="text-xl font-serif font-semibold">
              Aaradhya visionary photography
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative py-2 ${
                  location.pathname === item.path
                    ? darkMode
                      ? "text-primary-400"
                      : "text-primary-600"
                    : darkMode
                    ? "text-gray-300 hover:text-primary-400"
                    : "text-gray-600 hover:text-primary-600"
                }`}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-primary-500"
                    layoutId="navbar-underline"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors hover:bg-primary-100 dark:hover:bg-primary-900/30"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-primary-400" />
              ) : (
                <Moon className="h-5 w-5 text-primary-600" />
              )}
            </button>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2"
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-primary-400" />
              ) : (
                <Moon className="h-5 w-5 text-primary-600" />
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className={`h-6 w-6 text-primary-500`} />
              ) : (
                <Menu className={`h-6 w-6 text-primary-500`} />
              )}
            </button>
          </div>
        </div>
      </div>

      <motion.div
        className={`md:hidden ${!isMenuOpen && "hidden"} ${
          darkMode ? "bg-secondary-900" : "bg-white"
        }`}
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === item.path
                  ? darkMode
                    ? "bg-primary-900/50 text-primary-400"
                    : "bg-primary-50 text-primary-600"
                  : darkMode
                  ? "text-gray-300 hover:bg-primary-900/30 hover:text-primary-400"
                  : "text-gray-600 hover:bg-primary-50 hover:text-primary-600"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
