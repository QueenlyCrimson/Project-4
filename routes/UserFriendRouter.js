const Router = require("express").Router();

const controller = require("../controllers/UserFriendController");

Router.post("/add_friend/:userId/:friendId", controller.AddFriend);

module.exports = Router;
