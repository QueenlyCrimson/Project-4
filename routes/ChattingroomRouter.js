const Router = require("express").Router();

const controller = require("../controllers/ChattingroomController");

Router.get("/get_chatrooms", controller.GetChattingrooms);
Router.get("/get_chatroom/:chattingId", controller.GetChattingroomsByUserId);
Router.post("/create_chatroom", controller.CreateChattingroom);
Router.put("/update_chatroom/:chattingId", controller.UpdateChattingroom);
Router.delete("/destroy_chat/:chattingId", controller.DeleteChattingroom);
