
const getAllCartItems = async (req, res) => {
  res.render("cart/userCart");
};


module.exports.cartController = {
  getAllCartItems,
};