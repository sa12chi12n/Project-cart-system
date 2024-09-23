const mongoose = require("mongoose")
const CardSchema = new mongoose.Schema({

   Customername: {
      type: String,
      reqired: true
   },
   Productname: {
      type: String,
      reqired: true
   },
 
   Price: {
      type: Number,
      reqired: true
   },
   Quantity: {
      type: Number,
      reqired: true
   },


})
const Datalist = new mongoose.model("Datalist", CardSchema)

module.exports = Datalist