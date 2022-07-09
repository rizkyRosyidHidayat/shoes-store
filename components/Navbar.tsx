import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import LogoIcon from "./LogoIcon";

type Props = {};

const Navbar = (props: Props) => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        isScrolling ? "navbar-light navbar-dense" : "navbar-transparent"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <a href="">
            <LogoIcon
              width="44"
              height="15"
              fill={isScrolling ? "black" : "white"}
            ></LogoIcon>
            {/* <img src="/logo.svg" alt="logo" /> */}
          </a>
          <nav className="navbar-nav">
            <div className="mr-8">
              <a href="">Contact</a>
            </div>
            <div className="flex items-center">
              <ShoppingBagIcon className="w-2 h-2 mr-2"></ShoppingBagIcon>
              <a href="">Cart</a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
