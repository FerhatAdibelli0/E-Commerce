import { productsSliceActions } from "../redux/product";
import { useSelector } from "react-redux";
import classes from "../components/Products.module.css";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Col,
  Row,
  Button,
} from "reactstrap";

const Products = () => {
  const products = useSelector((state: any) => state.products.products);

  return (
    <div className={classes.container}>
      <Row className="p-5">
        {products.length > 0 ? (
          products.map((item: any) => (
            <Col sm="6" className="mb-3">
              <Card>
                <CardImg
                  alt="Card image cap"
                  src="https://picsum.photos/318/180"
                  top
                  width="100%"
                />
                <CardBody>
                  <CardTitle tag="h5">Card title</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    Card subtitle
                  </CardSubtitle>
                  <CardText>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </CardText>
                  <div className="d-flex justify-content-center">
                    <Button>Add To Cart</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))
        ) : (
          <h4>No found Products</h4>
        )}
      </Row>
    </div>
  );
};

export default Products;
