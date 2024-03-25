import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";
import { BASE_URL } from "../../services/baseurl";
import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
import { addBuyedbooksAPI } from "../../services/allAPI";

const ProductDetails = ({ selectedProduct }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handlePaymentSuccess = async (data) => {
    if (sessionStorage.getItem("token")) {
      const tokenvalue = sessionStorage.getItem("token");
      console.log("Payment data===========:", data.selectedProduct);
      const { bookimage, price, title } = data.selectedProduct
      console.log("paid booki",bookimage)
      const reqbody = new FormData()
      reqbody.append("title", title)
      reqbody.append("price", price)
      reqbody.append("bookImage", bookimage)
      const reqheader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${tokenvalue}`
      };
      const result = await addBuyedbooksAPI(reqbody, reqheader)
      console.log("addBuyedbooksAPI=====",result)

      navigate('/myshop')




    }

  }
  const handleStripeCheckout = () => {
    const additionalData = {
      selectedProduct,
      quantity
    };

    return (token) => handlePaymentSuccess({ token, ...additionalData })

  }

  const handelAdd = (selectedProduct, quantity) => {
    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };



  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img loading="lazy" src={`${BASE_URL}/uploads/${selectedProduct.bookimage}`} alt="" />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.title}</h2>

            <div className="info">
              <span className="price">{selectedProduct?.price} &#8377;</span>
              <span>category:{selectedProduct?.genres}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>

          
            <StripeCheckout
              billingAddress

              stripeKey="pk_test_51IYnC0SIR2AbPxU0TMStZwFUoaDZle9yXVygpVIzg36LdpO8aSG8B9j2C0AikiQw2YyCI8n4faFYQI5uG3Nk5EGQ00lCfjXYvZ"
              token={handleStripeCheckout()}
            >
              <button   aria-label="Add"
              type="submit"
              className="add">
                Book Now
              </button>
            </StripeCheckout>
            {selectedProduct?.description}

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
