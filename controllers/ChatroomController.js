const { Chatroom } = require("../models");

const GetChatrooms = async (req, res) => {
  try {
    const data = await Chatroom.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const GetChatroomById = async (req, res) => {
  try {
    const id = req.params.chatId;
    const data = await Chatroom.findByPk(id);
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
    res.send(updateChatroom);
  } catch (error) {
    throw error;
  }
};

const DeleteChatroom = async (req, res) => {
  try {
    let id = parseInt(req.params.chatId);
    await Chatroom.destroy({ where: { id: id } });
    res.send({ message: `Deleted Chatroom with a id of ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetChatrooms,
  GetChatroomById,
  CreateChatroom,
  UpdateChatroom,
  DeleteChatroom,
};
