const catchError = require("../utils/catchError");
const ProductImg = require("../models/ProductImg");
const path = require("path");
const fs = require("fs");

const getAll = catchError(async (req, res) => {
  const result = await ProductImg.findAll();
  return res.json(result);
});

const create = catchError(async (req, res) => {
  const { filename } = req.file;
  //console.log(filename)

  const url = `${req.protocol}://${req.headers.host}/uploads/${filename}`;

  const newBody = { filename, url };

  const result = await ProductImg.create(newBody);

  return res.status(201).json("created");
});

const remove = catchError(async (req, res) => {
  const { id } = req.params;
  const result = await ProductImg.findByPk(id);

  if (!result) return res.status(404);
  const imageFilePath = path.join(
    __dirname,
    "..",
    "public",
    "uploads",
    `${result.filename}`
  );

  fs.unlinkSync(imageFilePath);

  await result.destroy();
  return res.status(204).json("erased");
});

module.exports = {
  getAll,
  create,
  remove,
};
