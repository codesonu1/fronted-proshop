import React from "react";
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Rating from "./Rating";
const Product = ({ product }) => {
  const navigate = useNavigate();

  function navigateToProductPage(id) {
    navigate(`/product/${id}`);
  }
  return (
    <>
      <Card
        className="my-3 p-3"
        key={product.id}
        onClick={() => navigateToProductPage(product.id)}
      >
        <Link to={`/product/${product.id}`}>
          <Card.Img
            src={product.img}
            style={{ height: "150px", width: "200px" }}
            variant="top"
          ></Card.Img>
        </Link>
        <Link to={`/product/${product.id}`}>
          <Card.Body as="div">
            <div>{product.name}</div>
          </Card.Body>
        </Link>

        <Card.Text as="div">
          <Rating value={product.rating} text={product.reView} color="yellow" />
        </Card.Text>
        <Card.Text as="div">
          <div>${product.price}</div>
        </Card.Text>
      </Card>
    </>
  );
};
export default Product;
