import React, { useEffect, useState } from 'react'
import Products from './Products'
import Cartimg from '../Components/images/cartimage.jpeg'
import { useGetDummyDataQuery } from './api';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';

export default function Dashboard() {
  const { data, error, isLoading } = useGetDummyDataQuery();
  const [category , setCategory] = useState("")

  useEffect(() => {
    if (data) {
        console.log('Response Data:', data);
    }
}, [data]);

const dataCategory = data?.length > 0 ? [...new Set(data.map(value => value?.category))] : [];
dataCategory.unshift("All")
console.log("datacat", dataCategory);





  return (
    <> 
      <div className='row' style={{display : "flex" , justifyContent : "space-around", alignItems :"center"}}>
        <div className='col-md-6 ms-5'>
          <h4 style={{fontWeight : "bold" , fontFamily : "sans-serif"}}>Welcome to Shopping Cart</h4>
          <p>Welcome to our online store, where we provide an extensive selection of top-quality products to fulfill all your shopping desires. Whether you’re seeking fashion, electronics, home appliances, or other items, we have everything you need.</p>

        </div>
        <div className='col-md-4'>
          <img src={Cartimg} style={{ width: '100%', height: 'auto' }} alt='CartImage' />

        </div>
      </div>
      <div className='row'>
        {
          dataCategory?.length > 0 && (
            <div className='row'>
              <div className='col-md-6' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                {dataCategory.map((category, index) => (
                  <button key={index} 
                  style={{ margin: '10px' , border: "none" , borderRadius : "10px", padding : "5px 10px ", backgroundColor : "#6bdd6b" , textTransform : "capitalize"  , fontWeight : "bold" , cursor : "pointer"}}
                  onClick={() => setCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )
        }
      </div>
      <Products category = {category} />
      {/* {
        isLoading? (
          <div className='text-center'>
            <Spinner animation="border" size='lg' />
          </div>
        ) : (
            <div className='row '>
            {data?.length > 0 && data.map((product) => (
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
      } */}
    



     
    </>
  )
}
