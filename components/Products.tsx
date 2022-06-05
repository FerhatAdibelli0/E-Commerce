import { cartSliceActions } from "../redux/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import classes from "../components/Products.module.css";
import { uiSliceActions } from "../redux/ui";
import Peginator from "./Paginator";
import { BookmarkStarFill } from "react-bootstrap-icons";
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
            products.map((item: any, index: any) => (
              <Col sm="6" className="mb-3" key={index}>
                <Card>
                  <div>
                    <div className={classes.header_flag}>
                      <div className={classes.header_position}>
                        <span className={classes.feature}>
                          {item.featured ? null : (
                            <BookmarkStarFill size={30} />
                          )}
                        </span>
                        <span className={classes.bestseller}>
                          {item.bestseller ? null : "Best Seller"}
                        </span>
                      </div>
                    </div>
                    <div
                      className={classes.addCart}
                      onClick={() => {
                        addToCartHandler(item.name);
                      }}
                    >
                      <div className={classes.cart}>Add To Cart</div>
                      <div className={classes.image}>
                        <CardImg
                          alt={item.name}
                          src={item.image.src}
                          top
                          width="100%"
                          height="400px"
                        />
                        <div className={classes.overlay}>
                          <div className={classes.overlay_info}>
                            {item.name}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardBody>
                    <CardTitle tag="h5" className="text-center">
                      {item.name}
                    </CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted d-flex justify-content-center"
                      tag="h6"
                    >
                      {item.price}
                      <CardText>{item.currency}</CardText>
                    </CardSubtitle>
                    {/* <div className="d-flex justify-content-center mt-2">
                      <Button
                        onClick={() => {
                          addToCartHandler(item.name);
                        }}
                      >
                        Add To Cart
                      </Button>
                    </div> */}
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
