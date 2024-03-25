import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getbuydAPI } from "../services/allAPI";
import { BASE_URL } from "../services/baseurl";

function Myshop() {
    const { cartList } = useSelector((state) => state.cart);
    const [buydata, setbuydata] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
      window.scrollTo(0, 0);
      getbuyd();
    }, []);

    const getbuyd = async () => {
      try {
        const tokenvalue = sessionStorage.getItem("token");
        const reqheader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${tokenvalue}`
        };
        const result = await getbuydAPI(reqheader);
        setbuydata(result.data);
      } catch (error) {
        console.error("Error fetching buydata:", error);
      }
    };

    const totalPrice = cartList.reduce(
      (price, item) => price + item.qty * item.price,
      0
    );

    return (
      <>
        <NavBar />
        <section className="cart-items">
          <Container>
            <Row className="justify-content-center">
              <Col md={8}>
                {buydata.length === 0 && (
                  <h1 className="no-items product">No Item are added to Cart</h1>
                )}
                {buydata.map((item) => {
                  return (
                    <div className="cart-list" key={item.id}>
                      <Row>
                        <Col className="image-holder" sm={4} md={3}>
                          <img src={`${BASE_URL}/uploads/${item.bookimage}`} alt="" />
                        </Col>
                        <Col sm={8} md={9}>
                          <Row className="cart-content justify-content-center">
                            <Col xs={12} sm={9} className="cart-details">
                              <h3>{item.title}</h3>
                              <h4>${item.price}</h4>
                            </Col>
                            <Col xs={12} sm={3} className="cartControl"></Col>
                          </Row>
                        </Col>
                       
                      </Row>
                    </div>
                  );
                })}
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </>
    );
}

export default Myshop;
