
const express=require('express')
const router=express.Router();
const {courseController}=require('../controller/courseController')

router.get("/courses", courseController.getAllProducts)
router.get('/addCourse',courseController.addCourseForm)
   











module.exports=router;

