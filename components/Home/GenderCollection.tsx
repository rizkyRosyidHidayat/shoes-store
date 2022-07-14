import React from "react";

type Props = {};

const GenderCollection = (props: Props) => {
  const gender = [
    { title: 'Men Collection', img: '/men-collection.png', link: '' },
    { title: 'Women Collection', img: '/women-collection.jpeg', link: '' }
  ]
  return (
    <section className="mt-10 mt-md-20 mt-lg-40">
      <div className="container">
        <div className="grid col-span-1 col-span-md-2">
          {gender.map(item => (
            <div key={item.title} className="gender-collection">
              <img src={item.img} alt={item.title} className="w-full" />
              <div className="gender-collection-label">
                <div className="label pt-md-3 pb-md-3 pl-md-5 pr-md-5">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenderCollection;
