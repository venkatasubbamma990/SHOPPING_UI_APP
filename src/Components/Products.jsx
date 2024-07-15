import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './redux/slice';

export default function Products() {
    const [products , setProducts] = useState([])
    const [loading , setLoading] = useState(false)
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.addCartReducer.cartProducts)

    useEffect(()=> {
        fetchProducts()
    },[])
    const fetchProducts = () => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res)=> res.json())
        .then((res) => {
            setLoading(false)
            setProducts(res)
        }).catch((err)=> {
            setLoading(false)
            console.log(err)
        })
    }
                    
    const handleAddCart = (product) => {
    
        dispatch(addProduct(product))
    }
  
  return (
    <>
      <h1 className='text-center my-4'>Products</h1>
      {
        loading? (
          <div className='text-center'>
            <Spinner animation="border" size='lg' />
          </div>
        ) : (
            <div className='row '>
            {products.map((product) => (
              <div className='col-md-3 mb-4'>
                <Card  className='h-100'>
                    <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{height:"130px" , width:"100px" }} />
                    </div>
                  
                  <Card.Body>
                    <Card.Title>{product.title?.slice(0,30)}</Card.Title>
                    <Card.Text>{product.description?.slice(0,100)}</Card.Text>
                    <Card.Text>INR : {product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer >
                  <div className='text-center'>
                    <Button variant="primary" onClick={()=>handleAddCart(product)}>
                        {
                          cartProducts.some(cartProduct => cartProduct.id === product.id) ? "Go To Cart" : "Add To Cart"
                        }
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        )
      }
     
         
    </>
    
  )
}
