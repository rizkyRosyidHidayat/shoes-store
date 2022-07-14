import React from "react";
import { convertIDR } from "../../functions/global.function";
import { HeartIcon } from "@heroicons/react/outline";
import { HeartIcon as HeartIconFull } from "@heroicons/react/solid";
import { useGetProductByBrandQuery } from "../../services/product.api";
import { useRouter } from "next/router";

type Props = {};

const Products = (props: Props) => {
  const { data, isLoading } = useGetProductByBrandQuery("nike");

  const router = useRouter()
  
  return (
    <section className="mt-40">
      <div className="container">
        <p className="text-subheading-1 font-medium mb-7">Only For You</p>
        <div className="grid col-span-4 col-gap-3">
          {data === undefined || isLoading ? <></> : data.map((item, index) => (
            <div key={index} className="product-item" onClick={() => router.push(`/detail/${item.id}`)}>
              <div className="product-item-img">
                {item.favorite ? (
                  <HeartIconFull className="product-item-favorite-active"></HeartIconFull>
                ) : (
                  <HeartIcon className="product-item-favorite"></HeartIcon>
                )}
                <img src={item.images.card} alt={item.name} />
              </div>
              <p className="font-medium text-subheading-2 mt-6">{item.name}</p>
              <ul className="category">
                {item.categories.map(li => (
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
