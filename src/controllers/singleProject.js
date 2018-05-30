const nodemailer = require('nodemailer');
const selectProject = require('./../database/queries/selectProject');
const selectClient = require('./../database/queries/selectClient');

exports.get = (req, res) => {
  const { id } = req.params;

  selectProject(id, (err, result) => {
    if (err) console.log(err);
    else {
      res.render('singleProject', { result: result.rows[0], style: '../css/style.css' });
    }
  });
};

exports.post = (req, res) => {
  const { id } = req.params;
  selectClient(id, (err, result) => {
    if (err) console.log(err);
    else {
      const projectUrl = `${req.headers.host}${req.originalUrl}`;

      const output = `
        <p>You Have new offer</p>
        <h1>Offer Details</h1>
        <ul>
      <li>Project Link:${projectUrl}</li>
      <li>Project Hours: ${req.body.hours}</li>
      <li>Price Per Hour: ${req.body.hourPrice}</li>
        </ul>
        <h2>Message</h2>
      <p>${req.body.message}</p>
        `;
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: 'beinlive.co@gmail.com',
          pass: '*20051469',
        },
      });
      const mailOptions = {
        from: '"FreeLancer Website" <contact@freelancer.com>',
        to: result.rows[0].email,
        subject: 'You Have new offer',
        text: 'You Have new offer',
        html: output,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        res.render('singleProject', {
          msg: 'شكراً لك على التواصل معنا .. سنرد عليك في أبعد فرصة',
        });
      });
    }
  });
};
