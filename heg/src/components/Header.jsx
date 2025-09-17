// src/components/Header.jsx
import logoImage from "../assets/images/Logo.png";
import searchIcon from "../assets/images/search.png";
import shoppingBag from "../assets/images/Shopping bag.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50  transition-all duration-300">
      <div className="max-w-[1920px] mx-auto px-12 py-8 h-auto flex items-center justify-between">
        <div id="logoContainer" className="flex items-center">
          <img
            src={logoImage}
            alt="HEG Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
        <div
          id="navigationBar"
          className="flex flex-row justify-end items-center max-w-xl space-x-12"
        >
          <nav>
            <ul className="flex items-center space-x-12">
              <li>
                <a
                  href="#home"
                  className="font-bold text-black hover:text-black/80 transition-colors duration-200 text-lg"
                >
                  <strong>HOME</strong>
                </a>
              </li>
              <li>
                <a
                  href="#shop"
                  className="text-black/90 hover:text-black transition-colors duration-200 text-lg"
                >
                  SHOP
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black/90 hover:text-black transition-colors duration-200 text-lg"
                >
                  PAGES
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black/90 hover:text-black transition-colors duration-200 text-lg"
                >
                  FEATURES
                </a>
              </li>
            </ul>
          </nav>
          <div id="navImageContainer" className="flex flex-row space-x-5">
            <img
              src={searchIcon}
              alt=""
              className="h-6 w-auto object-contain"
            />
            <img
              src={shoppingBag}
              alt=""
              className="h-6 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
