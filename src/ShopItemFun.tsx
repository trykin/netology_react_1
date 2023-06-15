import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

export function ShopItemFunc() {
  const [products, setProducts] = useState<IProduct[]>([]);

  async function GetSore() {
    const response = await axios.get<IProduct[]>(
      "https://fakestoreapi.com/products"
    );
    setProducts(response.data);
  }

  useEffect(() => {
    GetSore();
  }, []);

  return (
    <Accordion className="mx-2 my-2" key="prodicts" defaultActiveKey="1">
      {products.map((product: IProduct) => (
        <Accordion.Item
          key={product.id.toString()}
          eventKey={product.id.toString()}
        >
          <Accordion.Header>{product.title}</Accordion.Header>
          <Accordion.Body>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image className="img-fluid" src={product.image} rounded />
                </Col>
                <Col className="d-flex">
                  <Card className="align-middle">
                    <p className="px-2 py-2">{product.description}</p>
                    <h1 className="px-2 py-2">{product.price} руб.</h1>
                    <div className="ms-auto">
                      <Button
                        className="justify-content-end mx-2 my-2"
                        variant="primary"
                      >
                        Добавить в корзину
                      </Button>
                    </div>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
