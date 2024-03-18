import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";

const Section = ({ title, bgColor, productItems,productItem }) => {
  console.log('proitem====',productItem)
  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {productItem?.map((productItem) => {
            return (
              <ProductCard
                title={title}
                productItem={productItem}
              />
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
