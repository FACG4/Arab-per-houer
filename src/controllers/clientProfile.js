const selectInfo = require('./../database/queries/selectInfo');

exports.get = (req, res) => {
  const { id } = req.params;


  selectInfo(id, (err, info) => {
    if (err) throw new Error(err);
    else {
      res.render('clientProfile', {
        info: info.rows,
        details: info.rows[0],
        projectCount: info.rows.length,
      });
    }
  });
};
