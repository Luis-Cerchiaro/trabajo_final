const { getAll, create, remove, update, login} = require('../controllers/user.controllers');
const express = require("express");
const verifyJWT = require('../utils/verifyJWT');

const routerUser = express.Router();

//Static routes

routerUser.route("/")
    .get(verifyJWT, getAll)
    .post(create);

routerUser.route("/login")
    .post(login);

 //Dynamic routes
    
routerUser.route("/:id")
    .delete(verifyJWT, remove)
    .put(verifyJWT, update);

module.exports = routerUser;
