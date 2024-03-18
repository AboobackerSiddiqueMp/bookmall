import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const location = useLocation();
  const productItem = location.state.productItem;
  console.log("proitem=====",productItem)

 
  return (
    <Fragment>
      <ProductDetails selectedProduct={productItem} />
      <ProductReviews selectedProduct={''} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={''} />
      </section>
    </Fragment>
  );
};

export default Product;
