import type { NextPage } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Home/Banner";
import GenderCollection from "../components/Home/GenderCollection";
import PopularBrand from "../components/Home/PopularBrand";
import Products from "../components/Home/Products";
import Promo from "../components/Home/Promo";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>

      <Navbar></Navbar>

      <Banner></Banner>

      <section className="mt-40">
        <p className="text-title font-medium text-center">
          Shoes Master House <br />
          100% Original
        </p>
        <p className="text-center mt-7">
          Find your best shoes with many choices from famous brands and of
          course original
        </p>
        <div className="flex justify-center mt-9">
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </section>

      <GenderCollection></GenderCollection>

      <PopularBrand></PopularBrand>

      <section className="mt-40">
        <p className="text-title font-medium text-center">Promo Available</p>
        <p className="text-center mt-7">
          Hurry up and buy it before it runs out and it's too late
        </p>
      </section>

      <Promo></Promo>

      <Products></Products>

      <Footer></Footer>
    </>
  );
};

export default Home;
