import React from 'react'
import checksteps from '../component/checksteps'
import { useSelector } from 'react-redux'
import { PROXY } from '../component/Constants/api'

const PlaceOrder = () => {
  const address = useSelector((state) => state.shipping.shippingInfo)
  const payment = useSelector((state) => state.payment.payments)
  const cart = useSelector((state) => state.cart)
  const items = cart.item

  return (
    <div className="container mt-4">
      {checksteps({ step1: true, step2: true, step3: true, step4: true })}

      <h2 className="mb-4 text-center">Place Order</h2>

      <div className="row">
        {/* Left Section */}
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-header fw-bold">Shipping Address</div>
            <div className="card-body">
              <p className="mb-0">
                {address.address}, {address.city}, {address.postalCode}, {address.state}, {address.country}
              </p>
            </div>
          </div>

          <div className="card mb-3">
            <div className="card-header fw-bold">Payment Method</div>
            <div className="card-body">
              <p className="mb-0">{payment}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-header fw-bold">Order Items</div>
            <div className="card-body p-0">
              <table className="table table-striped mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <img
                          src={PROXY + item.image}
                          alt={item.name}
                          style={{ width: '80px', height: 'auto' }}
                          className="img-thumbnail"
                        />
                      </td>
                      <td>{item.name}</td>
                      <td>₦{item.price}</td>
                      <td>{item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-header fw-bold">Order Summary</div>
            <div className="card-body">
              <p>
                <strong>Total Items:</strong>{' '}
                {items.reduce((acc, item) => acc + item.quantity, 0)}
              </p>
              <p>
                <strong>Total Price:</strong>{' '}
                ₦{items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
              </p>
              <button className="btn btn-primary w-100 mt-3">Place Order</button>
            </div>
          </div>
        </div>
        </div>
    </div>
    )
}

export default PlaceOrder