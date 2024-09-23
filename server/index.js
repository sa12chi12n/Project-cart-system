const express = require("express")
const bodyParser = require ("body-parser")
const cors = require ("cors")
const {create,getALL,getId , update , deletedata} = require("./controller/control")
const app = express()
app.use(bodyParser.json())
app.use(cors())
require("./db-connect/db-conn")

app.post("/create",create)
app.get("/getall",getALL)
app.get("/getid/:id",getId)
app.put("/update/:id",update)
app.delete("/delete/:id",deletedata)


app.listen(4000,()=>{
    console.log("create server")
})