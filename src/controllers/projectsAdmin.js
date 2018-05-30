const projectsAdmin = require('./../database/queries/adminUser');
const selectAllProject = require('./../database/queries/selectAllproject');



exports.get = (req, res) => {
  selectAllProject((err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('projectsAdmin', { result: result.rows });
    }
  });
};


exports.post = (req, res) => {
  const id = req.body.x;
  projectsAdmin.deleteProject(id ,(err, result) => {
    if (err) throw new Error(err);
    else {
      res.render('adminUser');
    }
  })
}
