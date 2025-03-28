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
import {validPassword } from "./Regex";
import { registrace } from "../../actions/userActions";







function SignupScreen() {




  const navigate = useNavigate()
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPass1] = useState("")
  const [password2, setPass2] = useState("")
  const [message, setMessage] = useState("")
  const dispatch = useDispatch();
  const location = useLocation();
  const redirect = location.search?location.search.split("=")[1] : "/"

  const userRegister = useSelector((state)=>state.userRegister);
  const {error, loading,userInfo}=userRegister;

  useEffect(()=>{
    if(userInfo){
      navigate("/")
    }
  },[userInfo,redirect])

  const SubmitHandler = (e) => {
    e.preventDefault();
    setMessage("");
  
    if (password !== password2) {
      setMessage("Hesla se neshodují");
      console.log("Chyba: Hesla se neshodují");
    }
  
    else if (!validPassword.test(password)) {
      setMessage("Heslo nesplňuje požadavky");
      console.log("Chyba: Heslo nesplňuje požadavky");
    }
    else {
      dispatch(registrace(fname,lname,email,password))
      setMessage("Úspěšně registrován")
      navigate("/prihlaseni/")
    }

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
                Registrace
              </Card.Header>

              <Card.Body>
              {message && <p style={{ color: "red" }}>{error}</p>}
                <Form onSubmit={SubmitHandler}>
                  <Form.Group className="mb-3" controlId="fname">
                    <Form.Label>
                      {" "}
                      <span>
                        <i className="fa fa-user"></i>
                      </span>{" "}
                      Jméno
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Vaše jméno"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="lname">
                    <Form.Label>
                      {" "}
                      <span>
                        <i className="fa fa-user"></i>
                      </span>{" "}
                      Příjmení
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Vaše příjmení"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required
                    />
                  </Form.Group>
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
                  <small>
                    Heslo musí obsahovat číslice, speciální znak a velké písmeno
                    a minimálně || A minimálně 5 znaků
                  </small>
                  <Form.Group className="mb-3" controlId="pass2">
                    <Form.Label>
                      {" "}
                      <span>
                        <i class="fa-solid fa-lock"></i>Potvrďte heslo
                      </span>
                    </Form.Label>
                    <InputGroup>
                      <Form.Control
                        required
                        type={showPassword ? "text" : "password"}
                        placeholder="Potvrď svoje heslo"
                        onChange={(e) => setPass2(e.target.value)}
                        value={password2}
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
                      Registrovat se
                    </Button>
                  </div>
                </Form>

                <Row className="py-3">
                  <Col>
                    Máte účet?
                    <Link to="/prihlaseni">Příhlásit se</Link>
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

export default SignupScreen;
