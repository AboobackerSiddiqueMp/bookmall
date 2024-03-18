import { Fragment, useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { Navbar } from "react-bootstrap";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getAllbooksAPI, getenglishAPI, getmangaAPI } from "../services/allAPI";

const Home = () => {
  const [data, setData] = useState([]);
  const [manga, setManga] = useState([]);
  const [english, setenglish] = useState([]);

  const [loadingData, setLoadingData] = useState(true);
  const [loadingManga, setLoadingManga] = useState(true);

  useWindowScrollToTop();

  const getalldata = async () => {
    if (sessionStorage.getItem("token")) {
      const tokenvalue = sessionStorage.getItem("token");
      try {
        const result = await getAllbooksAPI();
        setData(result?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoadingData(false);
      }
    }
  };

  const getManga = async () => {
    if (sessionStorage.getItem("token")) {
      const tokenvalue = sessionStorage.getItem("token");
      try {
        const result = await getmangaAPI();
        setManga(result?.data);
      } catch (error) {
        console.error("Error fetching manga:", error);
      } finally {
        setLoadingManga(false);
      }
    }
  };
  const getEnglishbook = async () => {
    if (sessionStorage.getItem("token")) {
      const tokenvalue = sessionStorage.getItem("token");
      try {
        const result = await getenglishAPI();
        setenglish(result?.data);
      } catch (error) {
        console.error("Error fetching manga:", error);
      } finally {
        setLoadingManga(false);
      }
    }
  };

  useEffect(() => {
    getalldata();
    getManga();
    getEnglishbook();
  }, []);

  return (
    <Fragment>
      <NavBar />
      <SliderHome />
      <Wrapper />
      {loadingData ? (
        <div>Loading...</div>
      ) : (
        <Section
          title="New Arrivals"
          bgColor="#f6f9fc"
          productItems={discoutProducts}
          productItem={data}
        />
      )}
      {loadingManga ? (
        <div>Loading Manga...</div>
      ) : (
        <Section
          title="Manga"
          bgColor="#f6f9fc"
          productItems={discoutProducts} // Ensure you pass correct data
          productItem={manga}
        />
      )}
       {loadingManga ? (
        <div>Loading Manga...</div>
      ) : (
        <Section
          title="english"
          bgColor="#f6f9fc"
          productItems={discoutProducts} // Ensure you pass correct data
          productItem={english}
        />
      )}
      <Footer />
    </Fragment>
  );
};


export default Home;
