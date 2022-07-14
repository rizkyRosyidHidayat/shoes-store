import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/solid";
import LogoIcon from "./LogoIcon";
import Link from "next/link";

type Props = {
  fixed?: boolean;
  hide?: boolean;
};

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
        isScrolling || props.fixed
          ? "navbar-light navbar-dense"
          : "navbar-transparent"
      }${props.hide ? " navbar-hide" : ""}`}
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="cursor-pointer">
              <LogoIcon
                width="44"
                height="15"
                fill={isScrolling || props.fixed ? "black" : "white"}
              ></LogoIcon>
            </div>
          </Link>
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
