import React from 'react';
import { Link } from 'react-router-dom';
import { Button, NavDropdown } from 'react-bootstrap';
import "./Navbar.css";
import logo from '../jumia_logo.png';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi'



export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark ">
        <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>
          <img className="logo-image" src={logo} alt="Logo" /> 
        </Link>

          <div className="d-flex justify-content-center align-items-center with-tooltip" data-tooltip="Please fill out this form">
          <form className="d-flex ">
              <input className="form-control me-2" type="search" placeholder="Search - Not functional" aria-label="Search" />
              <button className="btn btn-outline-light searchbtn " type="submit">Search</button>
            </form>
          </div>

          <div className='top-right'>

            <div className='icons'>
                <div><AiOutlineUser size={30} /></div>
                <div>
                    <NavDropdown title="Account" id="basic-nav-dropdown">
                    <NavDropdown.Item className='dropdown-item' as={Link} to="/createProduct">Create Product</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-item' as={Link} to="/transfer">Make A Transfer</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-item' as={Link} to="/transferhistory">View My Transfer History</NavDropdown.Item>
                    <NavDropdown.Item className='signin' as={Link} to="/register">Register User/Sign In</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-item' as={Link} to="/products">View Products</NavDropdown.Item>
                    <NavDropdown.Item className='dropdown-item' as={Link} to="/addPromoCode">Create PromoCode</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>

            <div className='icons'>
                <div><BiHelpCircle size={30} /></div>
                <div className='icons-text'>
                    <NavDropdown title="Help" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/deposit">Make Deposit</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/products">View Products</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/addPromoCode">Create PromoCode</NavDropdown.Item>
                    </NavDropdown>
                </div>

            </div>

            <div className='icons'>
                <div><AiOutlineShoppingCart size={30} /></div>
                <div className='icons-text'>Cart</div>

            </div>



          </div>



        </div>
      </nav>
    </div>
  );
}

