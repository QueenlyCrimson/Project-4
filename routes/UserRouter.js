const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/get_user", controller.GetAllUsers);
Router.post("/create_user", controller.CreateUser);
Router.get("/get_friends/:user_id", controller.GetUserFriends);

module.exports = Router;
