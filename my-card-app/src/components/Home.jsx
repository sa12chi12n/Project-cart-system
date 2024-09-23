import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const Home = () => {
    const [users, setusers] = useState([])
   
    useEffect(() => {
        const fetch = async () => {
            const res = await axios.get("http://localhost:4000/getALL")
            setusers(res.data)
        }
        fetch()
    }, [])

    const deleteuser = async(userId)=>{
await axios.delete(`http://localhost:4000/delete/${userId}`)
.then((response)=>{
    setusers((prevUser)=> prevUser.filter((user)=> user._id !== userId))
    toast.success(response.data.msg,{position:"top-right"})
   }).catch(error=>console.log(error))
    }

    return (
        <>

      
        
        
            <div className="container-fluid ms-4">
           <h1 className='title-heading'>WELCOME  TO  ONLINE  SHOP CART 2024   </h1>
        
        <h2 className='create-card'>Create Cart</h2>
        
        <Link to="/create">
        <button  type='delete' className="btn btn-success shop-now-btn mt-3 px-3">CREATE TO CART</button></Link>
        
                <div className="first-container grid three-col">
                   
                        
                            {
                                users.map((user, index) => {
                                    return (
                                        //console.log(user);
                                        <div className="card mx-2 px-3 mt-3 mb-2" key={user._id}>
                                         <p className='product-name'>Product Name : {user.Productname} </p>
                                            <p>Customer Name : {user.Customername}</p>
                                            <p>Price : {user.Price}</p>
                                            <p>Quantity: {user.Quantity}</p>
                                            <p>Total Price : {user.Price*user.Quantity}</p>
                                            <p>Cart No : {index + 1}</p>
                                            <Link to={`/edit/`+ user._id} className='edit-btn'>Edit</Link>
                                           <button onClick={()=>{deleteuser(user._id)}} type='delete' className="btn btn-danger  mt-3 mx-12 mb-2 px-3 ">Delete</button>
                                           
                                        </div>

                                    
                                   )
                                }, [])
                            }
                          
                      

                </div>

            </div>
         

        </>
    )
}

export default Home
