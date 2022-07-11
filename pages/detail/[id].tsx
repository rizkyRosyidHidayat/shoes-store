import { NextPage } from 'next'
import React from 'react'
import BuyProduct from '../../components/Detail/BuyProduct'
import Category from '../../components/Detail/Category'
import DescProduct from '../../components/Detail/DescProduct'
import PhotoProduct from '../../components/Detail/PhotoProduct'
import Products from '../../components/Detail/Products'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'

type Props = {}

const Detail: NextPage = (props: Props) => {
  const [isScrolling, setIsScrolling] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header></Header>

      <Navbar fixed={true} hide={isScrolling}></Navbar>

      <Category></Category>

      <div className="container">
        <div className="grid col-span-3 col-gap-3 mt-10">
          <div className='cols-2'>
            <PhotoProduct></PhotoProduct>
            <DescProduct></DescProduct>
          </div>
          <div>
            <BuyProduct></BuyProduct>
          </div>
        </div>
      </div>

      <Products></Products>

      <Footer></Footer>
    </>
  )
}

export default Detail