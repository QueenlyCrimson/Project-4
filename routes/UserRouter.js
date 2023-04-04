const Router = require("express").Router();

const controller = require("../controllers/UserController");

Router.get("/get_user", controller.GetAllUsers);
Router.get("/get_user/:user_id", controller.GetUser);
Router.get("/get_user/by_email/:email", controller.GetUserByEmail);
Router.post("/create_user", controller.CreateUser);
Router.get("/get_friends/:user_id", controller.GetUserFriends);
Router.put("/update_user/by_id/:user_id", controller.UpdateUser);
Router.delete("/delete_user/:user_id", controller.DeleteUser);

module.exports = Router;
