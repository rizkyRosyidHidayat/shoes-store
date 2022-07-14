import React from "react";
import { gsap } from "gsap";
import { useGetProductByBrandQuery } from "../../services/product.api";
import Link from "next/link";

type Props = {};

const Banner = (props: Props) => {
  const [brand, setBrand] = React.useState("nike");
  const { data, isLoading } = useGetProductByBrandQuery(brand);

  const brands = [{ brand: "NIKE" }, { brand: "PUMA" }, { brand: "REEBOK" }];

  const refProduct = React.useRef<Array<HTMLDivElement | null>>([]);
  const refProductImg = React.useRef<Array<HTMLImageElement | null>>([]);
  const refProductDetail = React.useRef<Array<HTMLDivElement | null>>([]);
  const [onMouseOver, setOnMouseOver] = React.useState<gsap.core.Timeline[]>(
    []
  );

  React.useEffect(() => {
    if (data && !isLoading) {
      const image = refProductImg.current;
      const detail = refProductDetail.current;
      const mouseOver = refProduct.current.map((item, index) => {
        const tl = gsap.timeline({
          paused: true,
        });
        tl.to(item, {
          css: { width: "200%" },
          duration: 0.3,
        })
          .to(image[index], {
            css: { width: 250, transform: "rotate(0deg)" },
            duration: 0.5,
          })
          .to(detail[index], {
            autoAlpha: 1,
            duration: 0.3,
          });
        return tl;
      });
      setOnMouseOver(mouseOver);
    }
  }, [data, isLoading]);

  return (
    <section className="w-full relative">
      <div className={`flex h-viewport`}>
        {data === undefined || isLoading ? (
          <></>
        ) : (
          data.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (refProduct.current[index] = el)}
              className={`banner-product`}
              style={{ backgroundColor: item.colors[0] }}
              onMouseOver={() => {
                if (onMouseOver.length) {
                  onMouseOver[index].play();
                }
              }}
              onMouseLeave={() => {
                if (onMouseOver.length) {
                  onMouseOver[index].reverse();
                }
              }}
            >
              <Link href={`/detail/${item.id}`}>
                <div>
                  <img
                    ref={(el) => (refProductImg.current[index] = el)}
                    src={item.images.banner}
                    alt={item.name}
                  />
                  <div
                    ref={(el) => (refProductDetail.current[index] = el)}
                    className="detail p-3"
                  >
                    <p className="font-medium text-md-subheading-1 text-lg-title text-white">
                      {item.name}
                    </p>
                    <ul className="category mt-3">
                      {item.categories.map((li) => (
                        <li
                          key={li}
                          className="text-body-1 mt-1 font-light mr-1"
                        >
                          {li},{" "}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
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
                    item.brand.toLocaleLowerCase() === brand
                      ? "text-subheading-1"
                      : "text-body-1 text-secondary"
                  }`}
                  onClick={() => setBrand(item.brand.toLocaleLowerCase())}
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
