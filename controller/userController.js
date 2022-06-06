
const getUserDetails = async (req, res) => {
  res.render("user/userProfile");
};


const getSupport = async (req, res) => {
  res.render("user/support");
};

const getFeedback = async (req, res) => {
  res.render("user/feedback");
};

const getWishlist = async (req, res) => {
  res.render("user/wishlist");
};
const getQuery = async (req, res) => {
  res.render("user/userQuery");
};

const addQuery = async (req, res) => {
  res.render("user/queryForm");
};
 

module.exports.userController = {
  getUserDetails,
  getSupport,
  getFeedback,
  getWishlist,
  addQuery,
  getQuery,
};
