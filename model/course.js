const mongoose = require('mongoose');
 const Review = require('./review');

 



const courseSchema = new mongoose.Schema({
    name: String,
    price: Number,
    img: String,
    desc: String,
    
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Review'
        }
    ]
});






const Course = mongoose.model('Course', courseSchema);


module.exports = Course;