



import React, { useEffect, useState } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './ProductCarousel.css';

import axios from 'axios';

function ProductsCarousel() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products/all', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          windows: 'true',
        },
      });
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    }
  };



  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)




    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };



  return (
    <>
    <div className='all'>
      <div className='product-title'>
        {products.length === 0 && "Create Products To Enable Product Display. To be an admin add 'row' to email during account registration "}
        {products.length > 0 && "Top Selling Items"}
      </div>
      <Carousel responsive={responsive}>
      {products.map((product) => (
    <div key={product.id} className="card">
      <span className='discount'>- {product.percentageDiscount}%</span>
      <img
        className="product--image"
        src={`data:image/jpeg;base64,${product.image}`}
        alt="product image"
      />
      <h3 className='product-name'>{product.productName}</h3>
      <p className="price"> #{ product.sellingPrice}    <span className="original-prize"> #{ product.sellingPrice + product.amountDiscounted}</span></p>
    </div>
  ))}
</Carousel>

    </div>

    </>
    
  )
}

export default ProductsCarousel





