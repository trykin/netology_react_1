import { Col, Row, Tab, Tabs } from "react-bootstrap";
import { ShopItemFunc } from "./ShopItemFun";
import ShopItemClass from "./ShopItemClass";
import { Calendar } from "./Calendar";

function App() {
  return (
    <div className="my-3">
    <Row className="justify-content-center">
      <Col xs={6} md={4}>
        <Tabs
          defaultActiveKey="ShopItemFunc"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="ShopItemFunc" title="ShopItemFunc">
            <ShopItemFunc />
          </Tab>
          <Tab eventKey="ShopItemClass" title="ShopItemClass">
            <ShopItemClass/>
          </Tab>
          <Tab eventKey="Calendar" title="Calendar">
            <Calendar/>
          </Tab>
        </Tabs>
      </Col>
    </Row>
    </div>
  );
}

export default App;
