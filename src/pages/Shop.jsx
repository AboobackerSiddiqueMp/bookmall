import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getSearchAPI } from "../services/allAPI";

const Shop = () => {
  const [result,setresult]=useState('')
  



  const [filterList, setFilterList] = useState('');
  useWindowScrollToTop();
  console.log(filterList)
  const Searchitem=async()=>{
    if (sessionStorage.getItem("token")) {
      const tokenvalue = sessionStorage.getItem("token");

    const result=await getSearchAPI(filterList,tokenvalue)
    console.log(result)
    setresult(result.data)

    }
  }
  useEffect(()=>{
    Searchitem()

  },[filterList])
  


  return (
    <Fragment>
      <NavBar></NavBar>
      <Banner title="products" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              {/* <FilterSelect setFilterList={''} /> */}
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={result} />
        </Container>
      </section>
      <Footer></Footer>
    </Fragment>
  );
};

export default Shop;
