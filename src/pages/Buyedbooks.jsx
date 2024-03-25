import React from 'react'
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { BASE_URL } from "../services/baseurl";
import { getbuydAPI } from '../services/allAPI';


function Buyedbooks() {
    const getBuyedbooks=async()=>{
        console.log("resukjhdshjdfh")
        const tokenvalue = sessionStorage.getItem("token")
        const reqheader = {
            "Content-Type": "multipart/form-data",
            "Authorization": `Bearer ${tokenvalue}`
        };
    
    
        const result=await getbuydAPI(reqheader)
        console.log("buyres=======",result)
    
    }
    useEffect(()=>{

    getBuyedbooks()
    
    },[])
  return (
    <div>
        <NavBar></NavBar>
    <section className="cart-items">
      <Container>

        <Row className="justify-content-center">
          
          <Col md={8}>
            {/* {cartList.length === 0 && (
              <h1 className="no-items product">No Items are add in Cart</h1>
            )} */}
            {''.map((item) => {
              const productQty = item.price * item.qty;
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
                          <h4>
                            {item.price}.00 * {item.qty}
                            <span>{productQty}.00</span>
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                         
                        </Col>
                      </Row>
                    </Col>

                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className=" d_flex">
                <h4>Total Price :</h4>
                <h3>.00</h3>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer></Footer>

    </div>
  )
}

export default Buyedbooks