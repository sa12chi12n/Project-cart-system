
const datalist = require("../model/model.js")

 const create = async(req,res)=>{
    try {
        const userdata = new datalist(req.body)
        if(!userdata){
            return res.status(404).json({msg:"user data not found"})
        }
      
        const savedata = await userdata.save();
        res.status(200).json(savedata)

    } catch (error) {
        res.status(500).json({error:error})
    }
}

const getALL = async(req,res)=>{
    try {
        const userdata = await datalist.find();
        if(!userdata){
            return res.status(404).json({msg:"user data not found"})
        }
        res.status(200).json(userdata)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
const getId = async(req,res)=>{
    try {
       const id = req.params.id
       const userdata = await datalist.findById(id)
        if(!userdata){
            return res.status(404).json({msg:"user data not found"})
        }
        res.status(200).json({msg:"Updata successfuly"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}
const update = async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await datalist.findById(id)
        if(!userdata){
            return res.status(401).json({msg:"user data not found"})
        }
        const updatedata = await datalist.findByIdAndUpdate(id, req.body,{new:true})
        res.status(200).json(updatedata)
    } catch (error) {
        res.status(500).json({error:error})
    }
}
const deletedata = async(req,res)=>{
    try {
        const id = req.params.id
        const userdata = await datalist.findById(id)
        if(!userdata){
            return res.status(401).json({msg:"user data not found"})
        }
     await datalist.findByIdAndDelete(id)
        res.status(200).json({msg:"delete data"})
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = {create , getALL, getId , update , deletedata}