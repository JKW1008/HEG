// src/components/Header.jsx
import logoImage from "../assets/images/Logo.png";
import searchIcon from "../assets/images/search.png";
import shoppingBag from "../assets/images/Shopping bag.png";

const Header = () => {
  return (
    <header className="w-full top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-300 bg-white">
      <div className="max-w-[1920px] mx-auto px-8 py-12 h-auto flex  items-center justify-between">
        <div id="logoContainer" className="flex items-center">
          <img
            src={logoImage}
            alt="HEG Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        <div
          id="navigationBar"
          className="flex flex-row justify-end items-center max-w-xl space-x-8"
        >
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <a
                  href="#home"
                  className="font-bold text-gray-800 transition-colors duration-200"
                >
                  <strong>HOME</strong>
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-gray-600 transition-colors duration-200"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 transition-colors duration-200"
                >
                  PAGES
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 transition-colors duration-200"
                >
                  FEATURES
                </a>
              </li>
            </ul>
          </nav>{" "}
          <div id="navImageContainer" className="flex flex-row space-x-5">
            <img
              src={searchIcon}
              alt=""
              className="h-8 w-auto object-contain"
            />
            <img
              src={shoppingBag}
              alt=""
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
