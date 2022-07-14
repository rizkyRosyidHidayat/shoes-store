import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductProps } from "../models/product.model";
import { getProdictDetail } from "../store/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL
  }),
  endpoints: builder => ({
    getProductByBrand: builder.query<ProductProps[], string>({
      query: brand => '/product?brand=' + brand
    }),
    getProductDetail: builder.query<ProductProps, string>({
      query: id => `/product/${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        // `onStart` side-effect
        try {
          const { data } = await queryFulfilled

          dispatch(getProdictDetail(data))
        } catch (err) {
          // `onError` side-effect
          throw Error('Error from server')
        }
      },
    }),
  })
})

export const {
  useGetProductByBrandQuery,
  usePrefetch
} = productApi