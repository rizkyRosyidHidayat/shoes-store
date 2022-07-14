import React from "react";

type Props = {
  categories: string[]
};

const Category = (props: Props) => {
  return (
    <div className="container">
      <ul className="detail-list-category mt-24">
        {props.categories.map((item) => (
          <li key={item} className="text-body-1 text-secondary">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
