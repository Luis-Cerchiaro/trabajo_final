const User = require("../../models/User");

const userCreate = async () => {
    
  await User.create({
    firstName: "fernando",
    lastName: "de jessus",
    email: "fernando@gmail.com",
    password: "fernando1234",
    phone: "1234566785",
  });
};

module.exports = userCreate;
