// const express = require('express')
// const passport = require('passport')
import express from 'express'
import passport from 'passport'
import session from 'express-session'
import cors from 'cors'

// require('./auth')
import './src/utils/auth.js'
import './src/utils/facebookAuth.js'
import userRouter from './src/routes/userRoutes.js';

const app = express()

const corsOptions = {
    origin: 'http://localhost:5173', // Allow only the frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    credentials: true, // Enable cookies and other credentials
  };
  

// Enable CORS for all routes
app.use(cors(corsOptions));

app.use(express.json());

app.use(session({
    secret: 'your_secret_key', // Replace with your own secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set secure to true if using HTTPS
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use('/users', userRouter);

app.get('/', (req, res) => {
    console.log('indsie')
    return res.status(200).json({data:true})
})


//google authentication
app.get('/auth/google',
    passport.authenticate('google', { scope: ['email', 'profile'] })
)

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/success',
        failureRedirect: '/failed'
    })
)


app.get('/auth/facebook',
    passport.authenticate('facebook'));

// app.get('/auth/facebook',
//         passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages'] }));

app.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect: '/success',
        failureRedirect: '/failed'
    })
)


app.get('/success', (req, res) => {
    return res.status(200).json({ data: true })
})


app.listen(3000, () => {
    console.log('server connected')
})