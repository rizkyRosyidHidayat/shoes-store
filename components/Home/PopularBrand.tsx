import React from "react";

type Props = {};

const PopularBrand = (props: Props) => {
  const brands = [
    { bg: "/nike.png", logo: "/brands/nike.png", link: "", title: "nike" },
    { bg: "/puma.png", logo: "/brands/puma.png", link: "", title: "puma" },
    { bg: "/reebok.png", logo: "/brands/reebok.png", link: "", title: "reebok" },
  ];
  return (
    <section className="mt-10 mt-md-20 mt-lg-40">
      <div className="container">
        <p className="text-subheading-1 font-medium mb-7">Popular Brand</p>
        <div className="grid col-span-1 col-span-md-3 col-gap-3 row-gap-3">
          {brands.map((item) => (
            <div key={item.title} className="popular-brand">
              <img src={item.bg} alt={item.title} className="w-full popular-brand-bg" />
              <div className="popular-brand-logo p-4">
                <img src={item.logo} alt={item.title} style={{ maxWidth: '100%' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularBrand;
