const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const Post = require('../models/PostModel')
const Comment = require('../models/CommentModel')
const bcrypt = require('bcrypt')
const verifyToken = require('../verifyToken')


//Create
router.post('/create',verifyToken,async(req,res)=>{
    try {
        const newComment = new Comment(req.body)
        const savedComment = await newComment.save()
        res.status(200).json(savedComment)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Update
router.put('/:id',verifyToken,async(req,res)=>{
    try {
        const updatedComment = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    } catch (error){
        res.status(500).json(error)
    }
})


//Delete
router.delete('/:id',verifyToken,async(req,res)=>{
    try {
        await Comment.findByIdAndDelete(req.params.id)
        res.status(200).send('Comment has been deleted!')
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get All Comment
router.get('/post/:postId',async(req,res)=>{
    try {
        const allComment = await Comment.find({postId:req.params.postId})
        res.status(200).json(allComment)
        } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router