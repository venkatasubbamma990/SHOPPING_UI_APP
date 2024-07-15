import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from './redux/slice';
import { useGetDummyDataQuery } from './api';

export default function Products({category}) {
    const [loading , setLoading] = useState(false)
    const dispatch = useDispatch()
    const cartProducts = useSelector((state) => state.addCartReducer.cartProducts)
    const { data, error, isLoading } = useGetDummyDataQuery();
    const [products , setProducts] = useState([])

    useEffect(() => {
        if (data) {
          if (category && category !== "All") {
            setProducts(data.filter((product) => product.category === category));
          } else {
            setProducts(data);
          }
            console.log('Response Data:', data);
        }
    }, [data , category]);
    // const fetchProducts = () => {
    //     setLoading(true)
    //     fetch('https://fakestoreapi.com/products',{
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //     }).then((res)=> res.json())
    //     .then((res) => {
    //         setLoading(false)
    //         setProducts(res)
    //     }).catch((err)=> {
    //         setLoading(false)
    //         console.log(err)
    //     })
    // }
                    
    const handleAddCart = (product) => {
        dispatch(addProduct(product))
    }
    if (isLoading) {
      return (
          <div className='text-center'>
              <Spinner animation="border" size='lg' />
          </div>
      );
  }

  if (error) {
      return (
          <div className='text-center'>
              <p>Error occurred: {error.message}</p>
          </div>
      );
  }
  
  return (
    <>
      <h2 className='text-center my-4' style={{fontFamily : "serif" , fontWeight : "bold"}}>Products</h2>
      {
        loading? (
          <div className='text-center'>
            <Spinner animation="border" size='lg' />
          </div>
        ) : (
            <div className='row '>
            {products?.length > 0 && products.map((product) => (
              <div className='col-md-3 mb-4'>
                <Card  className='h-100' >
                    <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{height:"130px" , width:"100px"  ,}} />
                    </div>
                  
                  <Card.Body>
                    <Card.Title style={{fontFamily : "serif" , fontWeight : "bold"}}>{product.title?.slice(0,30)}</Card.Title>
                    <Card.Text style={{fontFamily : "initial"}}>{product.description?.slice(0,100)}</Card.Text>
                    <Card.Text style={{fontFamily : "serif"}}>INR : {product.price}</Card.Text>
                  </Card.Body>
                  <Card.Footer >
                  <div className='text-center' style={{fontFamily : "serif"}}>
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
