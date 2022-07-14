import React from "react";

type Props = {};

const Promo = (props: Props) => {
  return (
    <section className="mt-10 mt-md-20">
      <div className="container">
        <div className="promo">
          <img src="/disc.webp" alt="promo" className="w-full" />
          <div className="promo-content">
            <div>
              <p className="promo-content-title text-subheading-2 text-md-subheading-1 text-lg-title">
                DISC <br />
                UP TO 60% <br />7 - 18 JULY
              </p>
              <button className="btn btn-primary mt-6">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
