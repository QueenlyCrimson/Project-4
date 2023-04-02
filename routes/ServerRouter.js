const Router = require("express").Router();
const UserRouter = require("./UserRouter");
const UserFriendRouter = require("./UserFriendRouter");
const AuthRouter = require("./AuthRouter");

Router.use("/user", UserRouter);
Router.use("/friend", UserFriendRouter);
Router.use("/auth", AuthRouter);

module.exports = Router;
