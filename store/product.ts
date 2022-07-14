import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductProps } from "../models/product.model";

interface InitialStateProps {
  product_detail: {
    loading: boolean;
    error: boolean;
    data: ProductProps | undefined;
  };
}

export const initialState: InitialStateProps = {
  product_detail: {
    loading: true,
    error: false,
    data: undefined,
  }
};

export const getProdictDetail = createAsyncThunk(
  "po/getProdictDetail",
  (payload: ProductProps) => payload
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProdictDetail.pending, (state) => {
        state.product_detail.loading = true;
      })
      .addCase(getProdictDetail.fulfilled, (state, { payload }) => {
        state.product_detail.data = payload;
        state.product_detail.loading = false;
      })
      .addCase(getProdictDetail.rejected, (state) => {
        state.product_detail.error = true;
        state.product_detail.loading = false;
      });
  },
});

export default productSlice.reducer;
