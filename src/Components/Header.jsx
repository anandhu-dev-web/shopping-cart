import { Container, Image, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
function Header({ cart }) {
  // console.log("cart--->", cart);
  const {cartItem} = useContext(CartContext);
  console.log(cart);
  
  return (
    <>
      <header>
        <Navbar expand="lg" className="bg-light">
          <Container>
            <Nav.Link as={Link} to="/">
              <Image
                src="https://t3.ftcdn.net/jpg/01/36/29/28/360_F_136292850_Jv9Vtxyargq6AMBst4kbST3nQ4gixiq6.jpg"
                alt="logo"
                className="headerlogo"
              />
            </Nav.Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/About">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact">
                  Contact
                </Nav.Link>
                <Nav.Link as={Link} to="./pages/Product">
                  Products
                </Nav.Link>
                <Nav.Link as={Link} to="/Admin/Pages">
                  userList
                </Nav.Link>
                <Nav.Link as={Link} to="/Admin/Pages/productList">
                  product List
                </Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/Cart">
                  <IoBag size={20} />
                  <span>{cartItem}</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/addproduct">
                  Add products
                </Nav.Link>
                <Nav.Link as={Link} to="/Login">
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
}

export default Header;
