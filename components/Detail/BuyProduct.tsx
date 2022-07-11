import React from "react";
import { convertIDR } from "../../functions/global.function";

type Props = {};

const BuyProduct = (props: Props) => {
  return (
    <div className="detail-card-buy">
      <p className="text-subheading-2 font-medium">Nike Air Dawn Max</p>
      <div className="flex items-end mt-4">
        <>
          <p className="text-body-1">
            {convertIDR(1600000)}
          </p>
          <p className="font-light ml-2 product-sale-price">
            {convertIDR(2000000)}
          </p>
        </>
      </div>
      <p className="text-secondary mt-7">Colors</p>
      <div className="flex mt-2">
        <div className="circle" style={{ backgroundColor: "red" }}></div>
      </div>
      <p className="text-secondary mt-5">Sizes</p>
      <div className="grid col-span-10 col-gap-2 mt-2">
        <div className="size">36</div>
        <div className="size">37</div>
      </div>
      <button className="btn btn-primary btn-large mt-8 w-full">Add to Cart</button>
      <button className="btn btn-outline btn-large mt-4 w-full">Add to Favorite</button>
    </div>
  );
};

export default BuyProduct;
