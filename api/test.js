const { parse } = require("jsonc-parser");

module.exports = (req, res) => {
  console.log(parse);
  res.status(200).send("Ok");
};
