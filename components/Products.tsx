import { productsSliceActions } from "../redux/product";
import { cartSliceActions } from "../redux/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const addToCartHandler = (id: any) => {
    const selectedItem = products.find((item: any) => item.id === id);
    dispatch(cartSliceActions.addItemToCart(selectedItem));
  };

  return (
    <div className={classes.container}>
      <Row className="p-5">
        {products.length > 0 ? (
          products.map((item: any) => (
            <Col sm="6" className="mb-3" key={Math.random()}>
              <Card>
                <CardImg alt={item.name} src={item.image.src} top width="100%" />
                <CardBody>
                  <CardTitle tag="h5">{item.name}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {item.price}
                  </CardSubtitle>
                  <CardText>{item.currency}</CardText>
                  <div className="d-flex justify-content-center">
                    <Button
                      onClick={() => {
                        addToCartHandler(item.id);
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
          <h4>No found Products</h4>
        )}
      </Row>
    </div>
  );
};

export default Products;
