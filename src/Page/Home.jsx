import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useSelector, useDispatch } from 'react-redux'
import { getProductsThunk, filterCategoriesThunk, filterHeadlinethunk  } from '../store/slices/Products.slice'
import { useEffect, useState } from 'react'
import axios from  'axios'
import { Link } from 'react-router-dom';


const Home = () => {
    const products = useSelector( state => state.products )
    const dispatch = useDispatch()
    const[categories, setCategories] = useState ( [] )
    const[inputValues, setinputValues]= useState("")



    useEffect( () => {
        dispatch( getProductsThunk() )

        axios
            .get('https://e-commerce-api-v2.academlo.tech/api/v1/categories')
            .then ( resp => setCategories(resp.data))
            .catch( error =>console.log(error))

    }, [] )

    return (
        <div>
           <Container>
            <Row className='py-3'>
                {
                categories.map(category => (
                    <Col key={category.id}>
                    <Button className='w-100' onClick={() => dispatch(filterCategoriesThunk(category.id) )}>{category.name}</Button>
                    </Col>
                    ))
                    }  
                    </Row>
                            <Row className='py-3'>
                                <Col>
                                        <InputGroup className="mb-3">
                                        <Form.Control
                                        placeholder="Busca tu producto"
                                        aria-label="Nuevo nombre de producto"
                                        aria-describedby="basic-addon2"
                                        value={inputValues}
                                        onChange={e => setinputValues(e.target.value)}
                                        />
                                        <Button 
                                        onClick={() => dispatch (filterHeadlinethunk(inputValues))}
                                        variant='outline-primary'
                                        >
                                        Search
                                        </Button>
                                        </InputGroup>
                                </Col>
                                        <Col>
                                        <Button 
                                        onClick={()=> dispatch(getProductsThunk())}
                                        className='w-15'>Todos
                                        </Button>
                                        </Col>
                                </Row>
                            <Row xs={1} md={2} lg={3} className="py-3">
                            {
                            products?.map( item => (
                                <Col className="mb-3" key={ item.id }>
                                        <Card>
                                        <Card.Img variant="top" 
                                        src={ item.images[0]?.url } 
                                        style={{height:250, objectFit:'cover'}} />
                                        <Card style={{ width: '18rem' }} />
                                        <Card.Body>
                                        <Card.Title>{ item.title }</Card.Title>
                                        <Card.Text>
                                        { item.description }
                                        </Card.Text>
                                        <Button 
                                        variant="primary"
                                        as={ Link }
                                        to={`/Product/${item.id}`}
                                        >Ver detalle</Button>
                                    </Card.Body>
                                    </Card>
                            </Col>
                        ))
                    }
                    
                </Row>
           </Container>
        </div>
    );
}

export default Home;