import React from 'react';
// import { useEffect } from 'react';
// import Header from '../../../front/src/component/Header';
// import Footer from '../../../front/src/component/Footer';
import { fetchproduct } from '../component/slice/productslice';  
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { PROXY } from '../component/Constants/api';

const Home = () => {
  const dispatch = useDispatch();
  const { data, isloading, error } = useSelector((state) => state.products); 
  const userInfo = useSelector((state) => state.login.userInfo);

  useEffect(() => {
    dispatch(fetchproduct());
  }, [dispatch]);

  return (
    <div>
      {/* <Header /> */}
      <main>
        <div className="container mt-4 text-center">
          <h1>Welcome {userInfo?.name || ''}</h1>
          <p>Your one-stop shop for all your needs!</p>

          {isloading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            <div className="row">
              {data && data.map((product) => (
                <div  className="col-md-4 mb-4">
                  <Link key={product._id} to={`/product/${product._id}`}>
                  <div className="card" >
                    <img src={PROXY+product.image} className="card-img-top" alt={product.name} />
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">{product.description}</p>
                      <p className="card-text">Price: ₦{product.price}</p>
                    </div>
                  </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;