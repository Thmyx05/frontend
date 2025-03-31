import React, { useEffect, useState, } from "react";
import { Link, useLocation, useNavigate, useParams, } from 'react-router-dom'
import {Row,Col,Image,ListGroup,Button,Card, Container, ListGroupItem, FormControl} from 'react-bootstrap'
import Hodnoceni from '../hodnoceni'
import {useDispatch, useSelector} from 'react-redux';
import Message from "../Message";
import Loading from "../Loading";


import { listProductDetails } from "../../actions/productsActions";

function ProductScreen({params}) {
  const location = useLocation()
  const navigate = useNavigate()
  const [pocet, setPocet] = useState(1)
    const { id } = useParams()
    const dispatch = useDispatch()
    const productDetails = useSelector((state)=>state.productDetails);
    const {error,loading,product}=productDetails
    useEffect(() => {
       
      dispatch(listProductDetails(id))


        }, [dispatch,params]);
    const pridatDoKosikuHandler =()=>{
      navigate(`/kosik/${id}?pocet=${pocet}`)
    }
  return (
    <Container>
    <div>
      <Link to="/" className="btn btn-dark my-3">
      Zpět
      </Link>


     {loading?(
      <Loading />
     ): error?(
      <Message> {error} </Message>
     ):(
      <Row>
      <Col md={6}>
      <Image 
  src={`https://backend-ct8d.onrender.com${product.image}`} 
  alt={product.produktnazev} 
  fluid 
/>
      </Col>
    

    <Col md={3}>
    <ListGroup variant="flush">
      <ListGroup.Item>
         <h3>{product.produktnazev}</h3> 
      </ListGroup.Item>
      
  
    <ListGroup.Item>
      <Hodnoceni
      hodnota={product.hodnoceni}
      text={` ${product.recenze} recenzí`}
      />
    </ListGroup.Item>
    <ListGroup.Item>
      Výrobce: {product.znacka}
    </ListGroup.Item>

    <ListGroup.Item>
      Popis: {product.info}
    </ListGroup.Item>
  </ListGroup>
    </Col>

  <Col md={3}>
  <Card>
      <ListGroup variant="flush">
          <ListGroup.Item>
              <Row>
                  <Col>Cena:</Col>
                  <Col><strong>{product.cena} CZK</strong></Col>
              </Row>
          </ListGroup.Item>
          <ListGroup.Item>
              <Row>
                  <Col>
                  Stav zboží:
                  </Col>
                  <Col>
                  {product.kusy > 0 ? "Na skladě" : "Vyprodáno"}
                  </Col>
              </Row>
          </ListGroup.Item>

          {product.kusy > 0 && (
            <ListGroup.Item>
              <Row>
                <Col>
                Počet
                </Col>
                <Col xs="auto" className="my-1">
                <FormControl 
                as="select"
                value={pocet}
                onChange={(e) => setPocet(e.target.value)}
                >
                  {[...Array(product.kusy).keys()].map((x) => (<option key={x + 1} value={x + 1}>{x + 1}</option>))}
                </FormControl>
                </Col>
              </Row>
            </ListGroup.Item>
          )}

          <ListGroup.Item>
              <Button className="btn btn-outline-success" disabled={product.kusy==0} type="button" onClick={pridatDoKosikuHandler}>Přidat do košíku</Button> 
          </ListGroup.Item>
      </ListGroup>
  </Card>
  </Col>





    </Row>
     )}


    </div>
    </Container>
  )
}

export default ProductScreen
