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
        const newPost = new Post(req.body)
        const savedPost = await newPost.save()
        res.status(200).json(savedPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Update
router.put('/:id',verifyToken,async(req,res)=>{
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        const {password,...restInfo}= updatedPost._doc
        res.status(200).json(restInfo)
    } catch (error){
        res.status(500).json(error)
    }
})


//Delete
router.delete('/:id',verifyToken,async(req,res)=>{
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.status(200).send('Post has been deleted!')
    } catch (error) {
        res.status(500).json(error)
    }
})


//Get Specific Post
router.get('/:id',async(req,res)=>{
    try {
        const getPost = await Post.findById(req.params.id)
        res.status(200).json(getPost)
    } catch (error) {
        res.status(500).json(error)
    }
})

//Get All Post
router.get('/',async(req,res)=>{
    const query = req.query
    try {
        const searchPost={
            title:{$regex:query.search||'',$options:"i"}
        }
        const allPost = await Post.find(searchPost)
        res.status(200).json(allPost)
        } catch (error) {
        res.status(500).json(error)
    }
})

//Get Post Specific User
router.get('/user/:userId',async(req,res)=>{
    try {
        const getUserAllPost = await Post.find({userId:req.params.userId})
        res.status(200).json(getUserAllPost)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router