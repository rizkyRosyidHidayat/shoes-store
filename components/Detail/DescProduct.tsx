import React from "react";

type Props = {};

const DescProduct = (props: Props) => {
  const details = [
    "Low boot",
    "Lace close",
    "Mesh base",
    "Hairy suede and leather overlays",
    "1-of-1 graphic at side",
  ];
  return (
    <div className="detail-desc-product">
      <p className="text-subheading-2 font-medium mb-3">Description</p>
      <p>
        Air Jordan 2 made its debut in 1987 as a sleeker, more streamlined
        version of its predecessor. This version of the AJ 2 features premium
        leather and an Air-Sole unit, making it the ultimate combination of
        performance and style.
      </p>
      <div className="grid col-span-2 col-gap-3 mt-8">
        <div>
          <p className="text-subheading-2 font-medium mb-3">Feature</p>
          <p>
            Air Jordan 2 made its debut in 1987 as a sleeker, more streamlined
            version of its predecessor.
          </p>
        </div>
        <div>
          <p className="text-subheading-2 font-medium mb-3">Detail</p>
          <ul>
            {details.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DescProduct;
