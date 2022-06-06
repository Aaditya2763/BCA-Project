const express=require('express');
const router=express.Router();

const {authController}=require('../controller/authController')


router.get('/auth/user-login',authController.getLoginPage);
router.get("/auth/admin-login", authController.getAdminLoginPage);
router.get("/auth/user-signup", authController.getSignupPage);
router.get("/auth/admin-signup", authController.getSignupPage);
router.get("/auth/user-logout", authController.userLogout);

router.post('/auth/user-signup',authController.addUser);
router.post("/auth/user-login", authController.userLogin);








module.exports=router;