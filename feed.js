

const mongoose = require("mongoose");
const Course = require("./model/course");

const courses = [
  {
    name: "HTML",
    img: "https://www.w3schools.com/whatis/img_html.jpg",
    price: 300,
    desc: "Learn html from scratch to advance.This course includes certificate ",
    mentor: "Aaditya Singh",
  },
  {
    name: "HTML",
    img: "https://www.w3schools.com/whatis/img_html.jpg",
    price: 300,
    desc: "Learn html from scratch to advance.This course includes certificate ",
    mentor: "Aaditya Singh",
  },
  {
    name: "HTML",
    img: "https://www.w3schools.com/whatis/img_html.jpg",
    price: 300,
    desc: "Learn html from scratch to advance.This course includes certificate ",
    mentor: "Aaditya Singh",
  },
  {
    name: "HTML",
    img: "https://www.w3schools.com/whatis/img_html.jpg",
    price: 300,
    desc: "Learn html from scratch to advance.This course includes certificate ",
    mentor: "Aaditya Singh",
  },
];

async function seedDB() {
  await Course.deleteMany({});
  await Course.insertMany(courses);
  console.log("Product Seeded");
}

module.exports=seedDB;



