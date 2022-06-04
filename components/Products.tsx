import { cartSliceActions } from "../redux/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classes from "../components/Products.module.css";
import { uiSliceActions } from "../redux/ui";
import Peginator from "./Paginator";
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
  const dispatch = useDispatch();

  const addToCartHandler = (name: any) => {
    const selectedItem = products.find((item: any) => item.name === name);
    dispatch(cartSliceActions.addItemToCart(selectedItem));
    dispatch(uiSliceActions.isShown());
  };

  return (
    <div className={classes.container}>
      <Peginator>
        <Row className="p-5">
          {products.length > 0 ? (
            products.map((item: any) => (
              <Col sm="6" className="mb-3" key={Math.random()}>
                <Card>
                  <CardImg
                    alt={item.name}
                    src={item.image.src}
                    top
                    width="100%"
                    height="350px"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.name}</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                      {item.price}
                    </CardSubtitle>
                    <CardText>{item.currency}</CardText>
                    <div className="d-flex justify-content-center">
                      <Button
                        onClick={() => {
                          addToCartHandler(item.name);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            ))
          ) : (
            <h4>No Found Products</h4>
          )}
        </Row>
      </Peginator>
    </div>
  );
};

export default Products;
