import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import React from 'react'
import BuyProduct from '../../components/Detail/BuyProduct'
import Category from '../../components/Detail/Category'
import DescProduct from '../../components/Detail/DescProduct'
import PhotoProduct from '../../components/Detail/PhotoProduct'
import Products from '../../components/Detail/Products'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Navbar from '../../components/Navbar'
import { usePrefetch } from '../../services/product.api'
import { useAppSelector } from '../../store/hooks'

type Props = {}

interface QueryString extends ParsedUrlQuery {
  id: string
};

const Detail: NextPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query as QueryString
  const prefetching = usePrefetch("getProductDetail");
  React.useEffect(() => {
    if (id) {
      prefetching(id, { force: true });
    }
  }, [id, prefetching]);

  const { data, loading } = useAppSelector((state) => state.product.product_detail);

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

  if (data === undefined || loading) {
    return <></>
  }

  return (
    <>
      <Header></Header>

      <Navbar fixed={true} hide={isScrolling}></Navbar>

      <Category categories={data.categories}></Category>

      <div className="container">
        <div className="grid col-span-3 col-gap-3 mt-10">
          <div className='col-start-1 col-end-3'>
            <PhotoProduct photos={data.images.details}></PhotoProduct>
            <DescProduct detail={data}></DescProduct>
          </div>
          <div className='col-start-3 col-end-4'>
            <BuyProduct detail={data}></BuyProduct>
          </div>
        </div>
      </div>

      <Products brand={data.brand}></Products>

      <Footer></Footer>
    </>
  )
}

export default Detail