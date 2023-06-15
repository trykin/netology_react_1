import axios from "axios";
import { useEffect, useState } from "react";
import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

interface IProduct {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

function App() {
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
    <>
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
                    <Card>
                      <Image
                        className="mx-2 my-2 img-fluid"
                        src={product.image}
                        rounded
                      />
                    </Card>
                  </Col>
                  <Col className="col-md-auto" xs={6} md={4}>
                    <Card className="align-middle">
                      <p>{product.description}</p>
                      <h1>{product.price} руб.<Button variant="primary">Primary</Button></h1>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </>
  );
}

export default App;
