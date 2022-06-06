const express = require("express");
const router = express.Router();

const {cartController}=require('../controller/cartController')


router.get('/user/cart',cartController.getAllCartItems)











module.exports=router;
