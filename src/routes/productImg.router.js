const { getAll } = require('../controllers/productImg.controllers');
const express = require('express');

const routerProductImg = express.Router();

routerProductImg.route('/')
    .get(getAll)

module.exports = routerProductImg;