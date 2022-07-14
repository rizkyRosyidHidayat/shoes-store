import React from "react";
import { convertIDR } from "../../functions/global.function";
import { ProductProps } from "../../models/product.model";

type Props = {
  detail: ProductProps;
};

const BuyProduct = (props: Props) => {
  return (
    <div className="detail-card-buy">
      <p className="text-subheading-2 font-medium">{props.detail.name}</p>
      <div className="flex items-end mt-4">
        {props.detail.sale_price ? (
          <>
            <p className="text-body-1">{convertIDR(props.detail.sale_price)}</p>
            <p className="font-light ml-2 product-sale-price">
              {convertIDR(props.detail.price)}
            </p>
          </>
        ) : (
          <p className="text-body-1">{convertIDR(props.detail.price)}</p>
        )}
      </div>
      <p className="text-secondary mt-7">Colors</p>
      <div className="flex mt-2">
        {props.detail.colors.map((item) => (
          <div
            key={item}
            className="circle"
            style={{ backgroundColor: item }}
          ></div>
        ))}
      </div>
      <p className="text-secondary mt-5">Sizes</p>
      <div className="grid col-span-6 col-gap-2 row-gap-2 mt-2">
        {props.detail.sizes.map((item) => (
          <div key={item} className="size text-center">
            {item}
          </div>
        ))}
      </div>
      <button className="btn btn-primary btn-large mt-8 w-full">
        Add to Cart
      </button>
      <button className="btn btn-outline btn-large mt-4 w-full">
        Add to Favorite
      </button>
    </div>
  );
};

export default BuyProduct;
