const { Chatroom } = require("../models");

const GetChatrooms = async (req, res) => {
  try {
    const data = await Chatroom.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const CreateChatroom = async (req, res) => {
  try {
    let chatroomBody = {
      ...req.body,
    };
    let newChatroom = await Chatroom.create(chatroomBody);
    res.send(newChatroom);
  } catch (error) {
    throw error;
  }
};

const UpdateChatroom = async (req, res) => {
  try {
    const id = parseInt(req.params.chatId);
    const updatedChatroom = req.body;
    let updateChatroom = await Chatroom.update(
      {
        name: updatedChatroom.name,
        image: updatedChatroom.image,
      },
      { where: { id: id } }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetChatrooms,
  CreateChatroom,
};
