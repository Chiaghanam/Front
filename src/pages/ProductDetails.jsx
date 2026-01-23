import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductDetail } from '../component/slice/ProductDetailslice';
import { PROXY } from '../component/Constants/api'
import { addToCart } from '../component/slice/cartslice';
// import Header from '../component/Header';
// import Footer from '../component/Footer';


const ProductDetails = () => {
    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.productDetail);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchProductDetail(id))
    }, [id, dispatch]);

    const handleAddToCart=()=>{
        dispatch(addToCart(product))
    }

  return (
    <div>
        {/* <Header /> */}
        <div>
            {loading? <p>Loading...</p>
            : error ? <p>Error: {error}</p>
            : product ? (<>
                <div className="row">
                    <div className="col-md-3 m-2">
                        <img src={PROXY+product.image} alt={product.name} style={{width: "90%", borderRadius:'7px'}} />
                        <h2>{product.name}</h2>
                         <p>Price: ${product.price}</p>
                          <div>
                            <p>{product.review}</p>
                        </div>
                         </div>
                      
                        <div className="col-md-4">
                        
                        <p>{product.description}</p>
                        </div>
                        <div className="col-md-4">
                        <div><span><h5>Status : </h5></span>{
                        product.countInStock > 0? 
                        (<h4>In Stock </h4>)
                        : (<h4>Out of Stock </h4>)
                        }
                        </div>
                         <button className={product.countInStock > 0 ? "btn btn-secondary" : "btn btn-disable"} type="button" onClick={()=>{handleAddToCart(product._id)}}>Add to cart</button>
                        </div>
                </div>
            </>) 
            : <p>No product found.</p>
            }
        </div>
            {/* <Footer /> */}
           
    </div>
  )
}

export default ProductDetails
