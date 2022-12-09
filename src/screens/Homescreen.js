import React, { useEffect, useState } from "react";
// import ProductData from "../ProductData.js";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product.js";

const Homescreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get("http://localhost:5000/api/product");
      setProducts(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <h3 className="text-start py-3">latest product</h3>
      <Row sm={3} md={3} lg={4} xlg={3}>
        {products.map((product, i) => {
          return (
            <Col>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Homescreen;
