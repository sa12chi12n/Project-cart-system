import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'
const Create = () => {
  const data = {
      Customername:"",
      Productname:"",
      Price:"",
      Quantity:""
      
  }
  const [carddata,setcarddata] = useState(data)
  const navigate = useNavigate()

 const submitdata = (e)=>{
const {name, value} = e.target

setcarddata({...carddata,[name]:value})

 }
 const datasubmit= async(e)=>{
  e.preventDefault()
  await axios.post("http://localhost:4000/create",carddata)
  .then((response)=>{
    toast.success(response.data.msg,{position:"top-right"})
    navigate("/")
  }).catch(error=>console.log(error))
 }
  
  return (
  
    <section>
     
    <div className="container mt-5 mb-5">
        <div className="row create-page ">
            <div className="col-12 col-lg-6 ">
                <div className=" cardyy  ">
                    <form onSubmit={datasubmit} className='mb-2'>
                        <label htmlFor="inputCustomername" className="col-sm-4 col-form-label">Customer Name</label>
                        <input type="Customername" required className="form-control" id="inputCustomername" name="Customername" onChange={submitdata}/>

                        <label htmlFor="inputProductname" className="col-sm-4 col-form-label">Product Name</label>
                        <input type="Productname" required  className="form-control" id="inputProductname" name="Productname" onChange={submitdata}/> 

                        <label htmlFor="inputPrice" required className="col-sm-4 col-form-label">Price</label>
                        <input type="Price" required  className="form-control" id="inputPrice" name="Price" onChange={submitdata}/>                       

                        <label htmlFor="inputQuantity" className="col-sm-2 col-form-label">Quantity</label>
                        <input type="Quantity" required  className="form-control" id="inputQuantity" name="Quantity" onChange={submitdata}/>

                        <button type="submit" className="btn btn-primary mt-3 px-3">BUY</button>
                    </form>
                    <Link to='/'>Back</Link>
                    
                </div>
            </div>
           
        </div>
    </div>
</section>
  )
}

export default Create