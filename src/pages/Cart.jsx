import React, { useState } from 'react';
// import Header from '../component/Header';
// import Footer from '../component/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { PROXY } from '../component/Constants/api';
import { removeFromCart } from '../component/slice/cartslice';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { item: cartdata, totalprice } = useSelector((state) => state.cart);
  const [selectedNum, setSelectedNum] = useState(1);

  const handleRemoveCart = (payload) => {
    dispatch(removeFromCart(payload));
  };
  
  const minAmount = 1;
  const price = ({amount}) => {
    return amount.toFixed(2);
  }

  // useEffect(() => {
  //   const changequantity =(selectedNum)=>{
  //     cartdata.map((crtdata) => { 
  //       // key = crtdata._id;
  //       crtdata.quantity = selectedNum;
  //     })
  //   }

  //   changequantity(selectedNum)
  // },[selectedNum])
  return (
    <div>
      {/* <Header /> */}
      <div className="row">
        <h5>Total price: ${price({amount: totalprice})}</h5>
        <div className="col-11">
          {cartdata.map((cdata) => {
            
            const maxAmount = cdata.countInStock;
            const quantityOptions = Array.from({ length: maxAmount }, (_, i) => i + minAmount);
            
            

            return (
              <div key={cdata._id} className="col-10 d-flex align-items-center">
                <div>
                  <img src={PROXY + cdata.image} style={{ height: '150px' }} alt={cdata.name} />
                </div>
                <div>
                  <h4 style={{ color: 'black' }}>{cdata.name}</h4>
                  <h5>${cdata.price}</h5>
                </div>
                <div>
                  <button
                    className="btn btn-danger"
                    type="button"
                    onClick={() => handleRemoveCart(cdata._id)}
                  >
                    Remove
                  </button>
                  <br />
                  <br />
                  <select
                    _id="cartQuantity"
                    value={selectedNum}
                    onChange={(e) => setSelectedNum(Number(e.target.value))}
                  >
                    {quantityOptions.map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
        {
          cartdata.length > 0 && (
            <button className='btn btn-success' type="submit" onClick={() => navigate('/Shipping')}>Checkout</button>
          )
        }
        
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Cart;