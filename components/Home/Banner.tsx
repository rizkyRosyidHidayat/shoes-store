import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

type Props = {};

const Banner = (props: Props) => {
  const brands = [
    { brand: "ADIDAS", active: false },
    { brand: "NIKE", active: true },
    { brand: "PUMA", active: false },
    { brand: "REEBOK", active: false },
  ];
  const [product, setProduct] = React.useState([
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-red.png",
      price: 2100000,
      sale_price: 0,
      active: false,
      color: "#9B3636",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-blue.png",
      price: 1900000,
      sale_price: 1700000,
      active: false,
      color: "#30308B",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-grey.png",
      price: 1650000,
      sale_price: 0,
      active: false,
      color: "#5A5A57",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Women", "Lifestyle"],
      img: "/shoes/nike-pink.png",
      price: 1500000,
      sale_price: 0,
      active: false,
      color: "#DFB9C0",
    },
  ]);

  const getIndexActive = product.findIndex((item) => item.active === true);

  const setColLength = (index_active: number) => {
    let result: { start: number; end: number }[] = [];
    product.map((item, index) => {
      let div = Math.floor(9 / 4);
      if (item.active) {
        div++;
      }

      let start = index + (index + 1);
      if (index_active > -1 && index > index_active) {
        start++;
      }

      let end = start + div;
      result[index] = {
        start: start,
        end: end,
      };
    });

    return result;
  };

  React.useEffect(() => {
    const getIndexActive = product.findIndex((item) => item.active === true);
    setColLength(getIndexActive);
  }, [product]);

  const handleMouseOver = (i: number) =>
    setProduct(
      product.map((item, index) => {
        if (i === index) {
          item.active = true;
        } else {
          item.active = false;
        }

        return item;
      })
    );
  const handleMouseLeave = () =>
    setProduct(
      product.map((item) => {
        item.active = false;

        return item;
      })
    );

  return (
    <section className="w-full relative">
      <div
        className={`grid ${
          getIndexActive > -1 ? "col-span-9" : "col-span-8"
        } w-full h-viewport`}
      >
        {product.map((item, index) => (
          <div
            key={item.img}
            className={`banner-product ${
              item.active ? "banner-product-active" : ""
            } col-start-${setColLength(getIndexActive)[index].start} col-end-${
              setColLength(getIndexActive)[index].end
            }`}
            style={{ backgroundColor: item.color }}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave()}
          >
            <div>
              <img src={item.img} alt={item.title} />
              <div className="detail">
                <p className="font-medium text-title text-white">{item.title}</p>
                <ul className="category mt-3">
                  {item.category.map((li) => (
                    <li key={li} className="text-body-1 mt-1 font-light mr-1">
                      {li},{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
