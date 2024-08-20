import express from 'express'
// import {   verifyEmailPassportController } from '../controllers/userController.js';
const userRouter = express.Router();




userRouter.get('/auth/google',verifyEmailPassportController);


export default userRouter