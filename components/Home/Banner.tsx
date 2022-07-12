import React from "react";
import { gsap } from "gsap";

type Props = {};

const Banner = (props: Props) => {
  const brands = [
    { brand: "ADIDAS", active: false },
    { brand: "NIKE", active: true },
    { brand: "PUMA", active: false },
    { brand: "REEBOK", active: false },
  ];
  const [product, setProduct] = React.useState([
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-red.png",
      price: 2100000,
      sale_price: 0,
      active: false,
      color: "#9B3636",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-blue.png",
      price: 1900000,
      sale_price: 1700000,
      active: false,
      color: "#30308B",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Men", "Running"],
      img: "/shoes/nike-grey.png",
      price: 1650000,
      sale_price: 0,
      active: false,
      color: "#5A5A57",
    },
    {
      title: "Nike Air Dawn Max",
      category: ["Nike", "Women", "Lifestyle"],
      img: "/shoes/nike-pink.png",
      price: 1500000,
      sale_price: 0,
      active: false,
      color: "#DFB9C0",
    },
  ]);

  const refProduct = React.useRef<Array<HTMLDivElement | null>>([]);
  const refProductImg = React.useRef<Array<HTMLImageElement | null>>([]);
  const refProductDetail = React.useRef<Array<HTMLDivElement | null>>([]);
  const [onMouseOver, setOnMouseOver] = React.useState<gsap.core.Timeline[]>(
    []
  );

  React.useEffect(() => {
    const image = refProductImg.current
    const detail = refProductDetail.current
    const mouseOver = refProduct.current.map((item, index) => {
      const tl = gsap.timeline({
        paused: true,
      });
      tl.to(item, {
        css: { width: '200%' },
        duration: 0.3,
      })
      .to(image[index], {
        css: { width: 250, transform: 'rotate(0deg)' },
        duration: 0.5,
      })
      .to(detail[index], {
        autoAlpha: 1,
        duration: 0.3,
      })
      return tl;
    });
    setOnMouseOver(mouseOver);
  }, []);

  return (
    <section className="w-full relative">
      <div className={`flex h-viewport`}>
        {product.map((item, index) => (
          <div
            key={item.img}
            ref={(el) => (refProduct.current[index] = el)}
            className={`banner-product`}
            style={{ backgroundColor: item.color }}
            onMouseOver={() => {
              if (onMouseOver) {
                onMouseOver[index].play();
              }
            }}
            onMouseLeave={() => {
              if (onMouseOver) {
                onMouseOver[index].reverse();
              }
            }}
          >
            <div>
              <img ref={(el) => (refProductImg.current[index] = el)} src={item.img} alt={item.title} />
              <div ref={(el) => (refProductDetail.current[index] = el)} className="detail">
                <p className="font-medium text-title text-white">
                  {item.title}
                </p>
                <ul className="category mt-3">
                  {item.category.map((li) => (
                    <li key={li} className="text-body-1 mt-1 font-light mr-1">
                      {li},{" "}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container">
          <div className="bg-white pl-6 pr-6 pt-5 pb-5 flex items-center justify-between">
            <div className="font-medium text-body-1">
              New Arrival Collection
            </div>
            {/* brands */}
            <ul className="banner-nav-brand">
              {brands.map((item) => (
                <li
                  key={item.brand}
                  className={`font-medium ${
                    item.active
                      ? "text-subheading-1"
                      : "text-body-1 text-secondary"
                  }`}
                >
                  {item.brand}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
