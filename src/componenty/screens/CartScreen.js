import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Container,
  ListGroupItem,
  FormControl,
} from "react-bootstrap";
import Message from "../Message";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { odebratZKosiku, pridatDoKosiku } from "../../actions/cartAction";

function CartScreen({ params }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const produktId = id;
  const pocet = navigate.search ? Number(location.search.split("=")[1]) : 1;
  console.log(produktId, pocet);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (produktId) {
      dispatch(pridatDoKosiku(produktId, pocet));
    }
  }, [dispatch, produktId, pocet]);
  const odebratZKosikuHandler = (id) => {
    dispatch(odebratZKosiku(id));
  };

  const checkoutHandler = () => {
    navigate("/prihlaseni?redirect=doprava");
  };
  return (
    <>
      <Row>
        <Col md={8}>
          <Container>
            <h1>Položky v košíku</h1>
            {cartItems.length === 0 ? (
              <Message variant="info">
                Košík je prázdný <Link to="/">Zpět</Link>
              </Message>
            ) : (
              <ListGroup variant="flush">
                {cartItems.map((item) => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={2}>
                        <Image src={item.image} alt={item.name} fluid rounded />
                      </Col>
                      <Col md={3}>
                        <Link to={`/produkt/${item.product}`}>
                          {" "}
                          {item.name}
                        </Link>
                      </Col>
                      <Col md={2}>{item.price},- CZK</Col>
                      <Col md={3}>
                        <FormControl
                          as="select"
                          value={item.pocet}
                          onChange={(e) =>
                            dispatch(
                              pridatDoKosiku(
                                item.product,
                                Number(e.target.value)
                              )
                            )
                          }
                        >
                          {[...Array(item.kusy).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </FormControl>
                      </Col>
                      <Col>
                        <Button
                          type="button"
                          variant="light"
                          onClick={() => odebratZKosikuHandler(item.product)}
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Container>
        </Col>
      </Row>
    </>
  );
}

export default CartScreen;
