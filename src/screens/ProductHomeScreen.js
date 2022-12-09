import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../ProductData";
import Rating from "../components/Rating";
import { useParams, Link } from "react-router-dom";
import { Image, Card, Row, Col, ListGroup, Button } from "react-bootstrap";

function ProductHomeScreen({ match }) {
  const param = useParams();

  const [product, setProductItem] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/product/${param.id}`
      );

      setProductItem(data);
    };
    fetchProduct();
  }, []);

  // const product = Product.find((p) => {
  //   return p.id === Number(param.id);
  // });

  return (
    <>
      <Link to="/" className="btn btn-bg-light my-3">
        <i className="fa-solid fa-arrow-left-long ">go back</i>
      </Link>
      <Row>
        <Col md={6}>
          <img src={product.img} alt={product.name} />
        </Col>
        <Col sm={3}>
          <ListGroup>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.reView} `} />
            </ListGroup.Item>
            <ListGroup.Item>price:${product.price}</ListGroup.Item>
            <ListGroup.Item>Description:{product.decs}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={3} variant="flush">
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>price</Col>
                  <Col>{product.price}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status</Col>
                  <Col>{product.inStoke > 0 ? "In Stoke" : "Out Of Stoke"}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  className=" btn-block"
                  type="button"
                  disabled={product.inStoke === 0}
                >
                  Add to Cart
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default ProductHomeScreen;
