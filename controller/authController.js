const User=require('../model/user')
const passport=require('passport')
const getLoginPage = async(req, res) => {
  res.render('auth/login');
};
const getAdminLoginPage = async (req, res) => {
  res.render("auth/adminLogin");
};

const getSignupPage =async (req,res)=>{
    res.render('auth/signup')
};



//creating new user
const addUser=async(req,res)=>{
  const{username,password,email,phone_no}=req.body;

  const user=new User({email,phone_no,username});
  console.log(user)
  console.log("user Created Successfully")
  await User.register(user,password);
          req.flash("success", "Signed up successfully!");
          res.redirect("/auth/user-login");
}

//route for  user login
const userLogin=async(req,res)=>{
  console.log("reached login route")
 await passport.authenticate("local", {
  failureRedirect: "/auth/login",
  failureFlash: true,
}),
  req.flash("success", "Welcome back again!");

res.redirect("/courses");
       

}



//route for  user logout

const userLogout= (req,res)=>{
   console.log("logged-out Successfully");
req.logout();


req.flash("success", "Good Bye!!");

res.redirect("/courses");

   
}


module.exports.authController = {
  getLoginPage,
  getSignupPage,
  getAdminLoginPage,
  addUser,
  userLogin,
  userLogout
};
