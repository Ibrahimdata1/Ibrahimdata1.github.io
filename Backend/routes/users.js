const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const Post = require('../models/PostModel')
const Comment = require('../models/CommentModel')
const bcrypt = require('bcrypt')
const verifyToken = require('../verifyToken')

//Update
router.put('/:id',verifyToken,async(req,res)=>{
    try {
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hashSync(req.body.password,salt)
        }
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        const {password,...restInfo}= updatedUser._doc
        res.status(200).json(restInfo)
    } catch (error){
        res.status(500).json(error)
    }
})


//Delete
router.delete('/:id',verifyToken,async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id)
        await Post.deleteMany({userId:req.params.id})
        await Comment.deleteMany({userId:req.params.id})
        res.status(200).send('user has been deleted!')
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get User
router.get('/:id',async(req,res)=>{
    try {
        const getUser = await User.findById(req.params.id)
        const {password,...restInfo} = getUser._doc
        res.status(200).json(restInfo)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router