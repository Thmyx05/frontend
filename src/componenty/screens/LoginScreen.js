import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Card,
  InputGroup,
} from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";
import Message from "../Message";
import { validEmail, validPassword } from "./Regex";
import { prihlaseni } from "../../actions/userActions";


function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass1] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  const location = useLocation();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, redirect]);

  const SubmitHandler = (e) => {
    e.preventDefault();

    dispatch(prihlaseni(email,password))




    setMessage("");
  };

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Container className="mt-3">
        <Row>
          <Col md={4}></Col>
          <Col md={4}>
            <Card>
              <Card.Header as="h3" className="text-center bg-black text-light">
                Přihlášení
              </Card.Header>

              <Card.Body>
                {message && <p style={{ color: "red" }}>{message}</p>}
                <Form onSubmit={SubmitHandler}>
                  <Form.Group className="mb-3" controlId="email">
                    <Form.Label>
                      {" "}
                      <span>
                        <i class="fa-solid fa-envelope"></i>
                      </span>{" "}
                      Email
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Vaš email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="pass1">
                    <Form.Label>
                      {" "}
                      <span>
                        <i class="fa-solid fa-lock"></i>
                      </span>{" "}
                      Heslo
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Zadejte heslo"
                        value={password}
                        onChange={(e) => setPass1(e.target.value)}
                      />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      onChange={() => setShowPassword(!showPassword)}
                      label="Zobrazit heslo"
                    />
                  </Form.Group>

                  <br></br>
                  <div className="d-grid gap2">
                    <Button className="btn btn-md btn-success" type="submit">
                      Přihlásit se
                    </Button>
                  </div>
                </Form>

                <Row className="py-3">
                  <Col>
                    Nemáte účet?
                    <Link to="/registrace">Registrovat se</Link>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </>
  );
}

export default LoginScreen;
