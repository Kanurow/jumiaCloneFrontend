import React from 'react'
import { AiFillAndroid, AiFillApi, AiFillAppstore } from 'react-icons/ai'
import {  BsBookHalf, BsBusFront,   BsFileMedical,   BsFillBuildingsFill, BsFillTicketPerforatedFill, BsPcDisplay } from 'react-icons/bs'
import "./Home.css"
import ImageSlider from '../components/ImageSlider';
import ProductsCarousel from './ProductsCarousel'
import Footer from '../layout/Footer'
import { Link } from 'react-router-dom'



export default function Home() {

  return (
    <>
    <div className='body'>



    <div className='main-section'>
    <div className='sidebar'>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsFillBuildingsFill size={20} /></div>
            <div className='sidebar-text'>Supermarket</div>
        </div>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsBusFront size={20} /></div>
            <div className='sidebar-text'>Travels</div>
        </div>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsPcDisplay size={20} /></div>
            <div className='sidebar-text'>Computing</div>
        </div>

        <Link className='sidebar-link' to={"/phonesAndTablets"}>
            <div className='sidebar-react-icon'><AiFillAndroid size={20} /></div>
            <div className='sidebar-text'>Phones & Tablets</div>
        </Link>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsFillTicketPerforatedFill size={20} /></div>
            <div className='sidebar-text'>Electronics</div>
        </div>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsBookHalf  size={20} /></div>
            <div className='sidebar-text'>Books</div>
        </div>

        
        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><BsFileMedical size={20} /></div>
            <div className='sidebar-text'>Baby Products</div>
        </div>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><AiFillAppstore size={20} /></div>
            <div className='sidebar-text'>Applications</div>
        </div>

        <div className='sidebar-link'>
            <div className='sidebar-react-icon'><AiFillApi size={20} /></div>
            <div className='sidebar-text'>Connectivity</div>
        </div> 
    </div>


            <div className='image-slider-section'>
                <ImageSlider />
            </div>
    </div>

    <div  className='products-display'>
        <ProductsCarousel />
    </div>

    </div>
    <Footer />









    </>
  )
}
