const Router = require("express").Router();

const controller = require("../controllers/ChatroomController");

Router.get("/get_chatrooms", controller.GetChatrooms);
Router.get("/get_chatroom/:chatId");
Router.post("/create_chatroom", controller.CreateChatroom);
Router.put("/update_chatroom/:chatId", controller.UpdateChatroom);
Router.delete("/destroy_chat/:chatId", controller.DeleteChatroom);
