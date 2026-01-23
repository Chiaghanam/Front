import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {setShippingInfo} from '../component/slice/shippingslice'
import checksteps from '../component/checksteps'


const Shipping = () => {
const info = useSelector((state) => state.shippingInfo || {})
const dispatch = useDispatch()
const navigate = useNavigate()

const onshipping = (data) => {
    console.log("Shipping Data:", data);
    
    dispatch(setShippingInfo(data))
    navigate('/Payment')
}

    const {register, handleSubmit} = useForm({
    defaultValues: {
        address: info.address || "",
        city: info.city || "",
        postalCode: info.postalCode || "",
        state: info.state || "",
        country: info.country || "",
    }
})
  return (
    <div>
    {checksteps({step1:true, step2:true})}
    <h2 className="text-center my-4">Shipping Information</h2>
      <form onSubmit={handleSubmit(onshipping)}>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">Address</label>
        <input
        required
          type="text"
          id="address"
          {...register("address")}
          className="form-control"
          placeholder="Enter your address"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="city" className="form-label">City</label>
        <input
        required
          type="text"
          id="city"
          {...register("city")}
          className="form-control"
          placeholder="Enter your city"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="postal code" className="form-label">Postal Code</label>
        <input

          type="text"
          id="postal code"
          {...register("postal code")}
          className="form-control"
          placeholder="Enter your postal code"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="State" className="form-label">State</label>
        <input
        required
          type="text"
          id="State"
          {...register("state")}
          className="form-control"
          placeholder="Enter your state"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">Country</label>
        <input
        required
          type="text"
          id="country"
          {...register("country")}
          className="form-control"
          placeholder="Enter your country"
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Done
      </button>
    </form>

    </div>
  )
}

export default Shipping
