import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { removeProduct } from './redux/slice';

export default function Cart() {
  const cartProducts = useSelector((state)=> state.addCartReducer.cartProducts)
  const [loading , setLoading] = useState(false)
  const dispatch = useDispatch()
  console.log(cartProducts)
  const RemoveCart = (product) => {
    dispatch(removeProduct(product))

  }
  return (
    <>
    <h1 className='text-center my-4'>Cart</h1>
    {
      loading? (
        <div className='text-center'>
          <Spinner animation="border" size='lg' />
        </div>
      ) : (
          <div className='row '>
          {cartProducts?.length > 0 && cartProducts.map((product) => (
            <div className='col-md-6 mb-4'>
              <Card  className='h-100'>
                  <div className='text-center'>
                  <Card.Img variant="top" src={product.image} style={{height:"130px" , width:"100px" }} />
                  </div>
                
                <Card.Body>
                  <Card.Title>{product.title?.slice(0,30)}</Card.Title>
                  <Card.Text>{product.description.slice(0,100)}</Card.Text>
                  <Card.Text>INR : {product.price}</Card.Text>
                </Card.Body>
                <Card.Footer >
                <div className='text-center'>
                  <Button variant="primary" 
                  onClick={()=>RemoveCart(product)}
                  >
                   Remove From Cart</Button>
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
