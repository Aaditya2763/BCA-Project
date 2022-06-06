const getAdminDetails = async (req, res) => {
  res.render("admin/adminProfile");
};

const addAdmin = async (req, res) => {
  res.render("admin/addAdminForm");
};

const getQueries = async (req, res) => {
  res.render("admin/allQuery");
};
module.exports.adminController = {
  getAdminDetails,
  addAdmin,
  getQueries
};
