const searchQuery = require("../database/queries/search");

exports.get = (req, res) => {
  res.render("search");
};
exports.post = (req, res) => {
  if (req.body) {
    console.log("ProjectData", req.body);
    const {title} = req.body;
    console.log("type_project", type_project);
    if (title.length > 0 && description.length > 0) {
    searchQuery.search(
        title,

        (err, result) => {
          console.log("result: ", result);
          if (err) throw new Error("error in posting project");
          // if (err) console.log("Error: ", err);
          res.redirect("/");
        }
      );
    }
  }
}
