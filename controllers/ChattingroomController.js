const { Chattingroom } = require("../models");

const GetChattingrooms = async (req, res) => {
  try {
    const data = await Chattingroom.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const CreateChattingroom = async (req, res) => {
  try {
    let chattingroomBody = {
      ...req.body,
    };
    let newChattingroom = await Chattingroom.create(chattingroomBody);
    res.send(newChattingroom);
  } catch (error) {
    throw error;
  }
};

const UpdateChattingroom = async (req, res) => {
  try {
    const id = parseInt(req.params.chatId);
    const updatedChattingroom = req.body;
    let updateChattingroom = await Chattingroom.update(
      {
        name: updatedChattingroom.name,
        image: updatedChattingroom.image,
      },
      { where: { id: id } }
    );
    res.send(updateChattingroom);
  } catch (error) {
    throw error;
  }
};

const DeleteChattingroom = async (req, res) => {
  try {
    let id = parseInt(req.params.chatId);
    await Chattingroom.destroy({ where: { id: id } });
    res.send({ message: `Deleted Chattingroom with a id of ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetChattingrooms,
  CreateChattingroom,
  UpdateChattingroom,
  DeleteChattingroom,
};
