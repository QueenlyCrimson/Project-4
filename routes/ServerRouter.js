const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const UserFriendRouter = require("./UserFriendRouter");

Router.use("/user", UserRouter);
Router.use("/friend", UserFriendRouter);

module.exports = Router;
