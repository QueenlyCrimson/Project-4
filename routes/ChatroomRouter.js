const Router = require("express").Router();

const controller = require("../controllers/ChatroomController");

Router.get("/get_chatroom", controller.GetChatrooms);
Router.post("/create_chatroom", controller.CreateChatroom);
Router.put("/update_chatroom", controller.UpdateChatroom);
Router.delete("/destroy_chat", controller.DeleteChatroom);
