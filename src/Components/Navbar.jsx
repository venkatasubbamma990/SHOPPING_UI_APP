import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { GiClothes } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { useSelector } from 'react-redux';



function ColorSchemesExample() {
  const cartProducts  = useSelector((state)=> state.addCartReducer.cartProducts)
    const navItems = [
       {
        
            name: 'ReduxToolkit',
            to: '/',
            icon : <TbBrandRedux/>,
            length : ""
        
       },
        {
            name: 'Products',
            to: '/products',
            icon : <GiClothes/>,
            length : ""
        },
        {
            name: 'Cart',
            to: '/cart',
            icon : <FaShoppingCart/>,
            length : cartProducts?.length ,
        }
    ]
  return (
    <>
     
     <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"brown"}}>
      <Container>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           {
             navItems.map((item, index) => (
               <Nav.Link key={index} as={Link} to={item.to} style={{color:"white" , fontWeight : "bold" , fontFamily : "serif"}}>
                 {item.icon} {""} {item.name} {item.length}
               </Nav.Link>
             ))
           }
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <br />
     
    </>
  );
}

export default ColorSchemesExample;