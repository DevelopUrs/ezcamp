const { insertForm } = require('../models');

module.exports = addForm = (req, res) => {
  insertForm(req.body, res);
};
