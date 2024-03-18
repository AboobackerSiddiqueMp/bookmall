import { Col } from "react-bootstrap";
import "./product-card.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/cart/cartSlice";
import { BASE_URL } from "../../services/baseurl"


const ProductCard = ({ title, productItem }) => {
const navigate=useNavigate()
  const dispatch = useDispatch();
  const router = useNavigate();
  const handelClick = () => {
    navigate('/products', { state: { productItem } });
  };
  const handelAdd = (productItem) => {
    dispatch(addToCart({ product: productItem, num: 1 }));
    toast.success("Product has been added to cart!");
  };
  return (
    <Col md={3} sm={5} xs={10} className="product mtop">
      
      <img
        loading="lazy"
        onClick={() => handelClick()}
        src={`${BASE_URL}/uploads/${productItem.bookimage}`}
        alt=""
      />
      <div className="product-like">
      </div>
      <div className="product-details">
        <h3 onClick={''}>{productItem.title}</h3>
        <div className="rate">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
        </div>
        <div className="price">
          <h4>${productItem.price}</h4>
          <button
            aria-label="Add"
            type="submit"
            className="add"
            onClick={(e)=>handelAdd(productItem)}
          >
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
