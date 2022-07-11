import React from "react";

type Props = {};

const Category = (props: Props) => {
  const categories = ["Nike", "Running", "Men", "Air Jordan"];
  return (
    <div className="container">
      <ul className="detail-list-category mt-24">
        {categories.map((item) => (
          <li key={item} className="text-body-1 text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
