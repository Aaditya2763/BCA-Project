const Course=require('../model/course')


const getAllProducts= async(req,res)=>{
const  courses=await Course.find({});
res.render('courses/allcourses',{courses});

}

const addCourseForm=async (req,res)=>{
    res.render("courses/addCourse")
}











module.exports.courseController={
    getAllProducts,
    addCourseForm,
}