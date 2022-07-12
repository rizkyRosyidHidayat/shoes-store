import React from "react";
import { convertIDR } from "../../functions/global.function";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFull } from "@heroicons/react/solid";

type Props = {};

const Products = (props: Props) => {
  const product = [
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-red.png",
      price: 2100000,
      sale_price: 0,
      favorite: false,
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-blue.png",
      price: 1900000,
      sale_price: 1700000,
      favorite: true,
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-grey.png",
      price: 1650000,
      sale_price: 0,
      favorite: false,
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Women", "Lifestyle"],
      img: "/shoes/nike-pink.png",
      price: 1500000,
      sale_price: 0,
      favorite: false,
    },
  ];
  return (
    <section className="mt-40">
      <div className="container">
        <p className="text-subheading-1 font-medium mb-7">Only For You</p>
        <div className="grid col-span-4 col-gap-3">
          {product.map((item, index) => (
            <div key={index} className="product-item">
              <div className="product-item-img">
                {item.favorite ? (
                  <HeartIconFull className="product-item-favorite-active"></HeartIconFull>
                ) : (
                  <HeartIcon className="product-item-favorite"></HeartIcon>
                )}
                <img src={item.img} alt={item.title} />
              </div>
              <p className="font-medium text-subheading-2 mt-6">{item.title}</p>
              <ul className="category">
                {item.category.map(li => (
                  <li key={li} className="text-secondary text-body-1 mt-1 font-light mr-1">{li}, </li>
                ))}
              </ul>
              <div className="flex items-end mt-6">
                {item.sale_price ? (
                  <>
                    <p className="font-medium text-subheading-2">
                      {convertIDR(item.sale_price)}
                    </p>
                    <p className="font-light ml-2 product-sale-price">
                      {convertIDR(item.price)}
                    </p>
                  </>
                ) : (
                  <p className="font-medium text-subheading-2">
                    {convertIDR(item.price)}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
