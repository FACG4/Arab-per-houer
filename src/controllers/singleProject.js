const selectProject = require('./../database/queries/selectProject')


exports.get = (req, res) => {
  const { id } = req.params;


  selectProject(id, (err, result) => {   
    if (err) console.log(err);
    else {
      res.render('singleProject', { result: result.rows[0] });
    }
  });
};

