const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/auth')
const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')
const commentRouter = require('./routes/comments')

//database
const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('database connect successfull!')
    } catch (error) {
        console.log(error)
    }
}

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({credentials:true,origin: "http://localhost:5173"}))
app.use(authRouter)
app.use('/post',postRouter)
app.use('/user',userRouter)
app.use('/comment',commentRouter)

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log('app is running on port'+process.env.PORT)
})