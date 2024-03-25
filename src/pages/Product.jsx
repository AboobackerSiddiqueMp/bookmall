import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { getSearchAPI } from "../services/allAPI";
import NavBar from "../components/Navbar/Navbar";

const Product = () => {
  const [data,setdata]=useState('')
  const location = useLocation();
  const productItem = location.state.productItem;
  console.log("proitem=====",productItem)
  

const getUML=async()=>{
  if (sessionStorage.getItem("token")) {
    const tokenvalue = sessionStorage.getItem("token");

  const result=await getSearchAPI(productItem.genres,tokenvalue)
  console.log("umldata=====",result)
  setdata(result.data)

  }

}
useEffect(()=>{
  if(productItem){
    getUML()
  }
},[])

 
  return (
    <Fragment>
      <NavBar></NavBar>
      <ProductDetails selectedProduct={productItem} />
      <section className="related-products">
        <Container>
          <h3>You might also like</h3>
        </Container>
        <ShopList productItems={data} />
      </section>
    </Fragment>
  );
};

export default Product;
