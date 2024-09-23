import axios from 'axios'
import React, { useEffect, useState } from 'react'

import {Link, useNavigate, useParams} from 'react-router-dom'
import toast from 'react-hot-toast'
const Update = () => {
  const data = {
    Customername: "",
    Productname: "",
    Price: "",
    Quantity: ""

  }
  const {id} = useParams()

  const [user, setuser] = useState(data)
  const navigate = useNavigate()
  const updatechange = (e) => {
    const { name, value } = e.target
 
    setuser({...user,[name]:value})
  }
useEffect( ()=>{
 axios.get(`http://localhost:4000/getId/${id}`)
.then((response)=>{
  
 setuser(response.data)
}).catch(error=>console.log(error))
},[id])

const updatesubmit= async(e)=>{
  e.preventDefault()
  await axios.put(`http://localhost:4000/update/${id}`,user)
  .then((response)=>{
    toast.success(response.data.msg,{position:"top-right"})
    navigate("/")
  }).catch(error=>console.log(error))
 }


return (
  <>
    <section>

      <div className="container mt-5 mb-5">
        <div className="row create-page ">
          <div className="col-12 col-lg-6 ">
            <div className=" cardy ">
              <h1>Update Now!</h1>
              <form onSubmit={updatesubmit} className='mb-2'>
                <label htmlFor="inputCustomername" className="col-sm-4 col-form-label">Customer Name</label>
                <input type="Customername"  value={user.Customername} onChange={updatechange}   className="form-control" id="inputCustomername" name="Customername" />

                <label htmlFor="inputProductname" className="col-sm-4 col-form-label">Product Name</label>
                <input type="Productname"  value={user.Productname} onChange={updatechange}  className="form-control" id="inputProductname" name="Productname" />

                <label htmlFor="inputPrice" className="col-sm-4 col-form-label">Price</label>
                <input type="Price"  value={user.Price} onChange={updatechange}  className="form-control" id="inputPrice" name="Price" />

                <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">Quantity</label>
                <input type="Quantity"  value={user.Quantity} onChange={updatechange}  className="form-control" id="inputQuantity" name="Quantity" />

                <button type="submit" className="btn btn-success mt-3 px-3">Update <i class="fa-solid fa-pen-to-square"></i></button>
              
              </form>
              <Link to='/'>
               <button type="submit" className="btn btn-danger mt-3 px-3">Cancel</button>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
    
  </>

)
}

export default Update

