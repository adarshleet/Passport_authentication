// const express = require('express')
// const passport = require('passport')
import express from 'express'
import passport from 'passport'

// require('./auth')
import './src/utils/auth.js'
// import userRouter from './src/routes/userRoutes.js';

const app = express()

app.use(express.json());
// app.use('/users', userRouter);

app.get('/',(req,res)=>{
    res.send('<a href="/auth/google">Authenticate</a>')
})

app.get('/auth/google',
    passport.authenticate('google',{scope:['email','profile']})
)

app.get('/auth/google/callback',
    passport.authenticate('google',{
        successRedirect : '/success',
        failureRedirect:'/failed'
    })
)



app.listen(3000,()=>{
    console.log('server connected')
})