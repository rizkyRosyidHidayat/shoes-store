import React from "react";
import { ProductProps } from "../../models/product.model";

type Props = {
  detail: ProductProps
};

const DescProduct = (props: Props) => {
  return (
    <div className="detail-desc-product">
      <p className="text-subheading-2 font-medium mb-3">Description</p>
      <p>
        {props.detail.description}
      </p>
      <div className="grid col-span-lg-2 col-gap-3 row-gap-8 mt-8">
        <div>
          <p className="text-subheading-2 font-medium mb-3">Feature</p>
          <p>
            {props.detail.feature}
          </p>
        </div>
        <div>
          <p className="text-subheading-2 font-medium mb-3">Detail</p>
          <ul>
            {props.detail.detail.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescProduct;
