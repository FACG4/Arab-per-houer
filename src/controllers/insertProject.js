exports.get = (req, res) => {
  res.render("insertProject");
};
exports.post = (req, res) => {
  console.log("dddd", req.body);
};
