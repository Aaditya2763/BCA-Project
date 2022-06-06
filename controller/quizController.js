
const getAllQuize = async (req, res) => {
  res.render("quizes/quizes");
};

const addQuizForm= async(req,res)=>{
  res.render("quizes/addQuiz");
}

module.exports.quizController = {
  getAllQuize,
  addQuizForm,
};