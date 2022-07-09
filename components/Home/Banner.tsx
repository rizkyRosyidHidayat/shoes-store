import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';

type Props = {};

const Banner = (props: Props) => {
  const brands = [
    { brand: "ADIDAS", active: false },
    { brand: "NIKE", active: true },
    { brand: "PUMA", active: false },
    { brand: "REEBOK", active: false },
  ];
  return (
    <section
      className="w-full h-viewport relative"
      style={{ backgroundColor: "GrayText" }}
    >
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container">
          <div className="bg-white pl-6 pr-6 pt-5 pb-5 flex items-center justify-between">
            <div className="font-medium text-body-1">
              New Arrival Collection
            </div>
            {/* brands */}
            <ul className="banner-nav-brand">
              {brands.map((item) => (
                <li
                  key={item.brand}
                  className={`font-medium ${
                    item.active
                      ? "text-subheading-1"
                      : "text-body-1 text-secondary"
                  }`}
                >
                  {item.brand}
                </li>
              ))}
            </ul>
            <div className="banner-nav-arrow">
              <ChevronLeftIcon className="text-secondary"></ChevronLeftIcon>
              <ChevronRightIcon></ChevronRightIcon>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
