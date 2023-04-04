const { User } = require("../models");
const { UserFriend } = require("../models");

const GetAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const GetUser = async (req, res) => {
  try {
    const id = req.params.user_id;
    let data = await User.findByPk(id);
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const CreateUser = async (req, res) => {
  try {
    let userBody = {
      ...req.body,
    };
    let newUser = await User.create(userBody);
    res.send(newUser);
  } catch (error) {
    throw error;
  }
};

const GetUserFriends = async (req, res) => {
  try {
    let user_id = req.params.user_id;
    let data = await User.findByPk(user_id, {
      // where: { userId: user_id },
      include: [
        {
          model: User,
          as: "friends",
          through: { attributes: [] },
          attributes: ["username", "profilePic"],
        },
      ],
    });
    res.send(data);
  } catch (error) {
    throw error;
  }
};

const UpdateUser = async (req, res) => {
  try {
    const id = parseInt(req.params.user_id);
    const updatedUser = req.body;
    let updateUser = await User.update(
      {
        username: updatedUser.username,
        email: updatedUser.email,
        profilePic: updatedUser.profilePic,
      },
      { where: { id: id } }
    );
    res.send(updateUser);
  } catch (error) {
    throw error;
  }
};

const DeleteUser = async (req, res) => {
  try {
    let id = parseInt(req.params.user_id);
    await User.destroy({ where: { id: id } });
    res.send({ message: `Deleted User with an id of ${id}` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetAllUsers,
  GetUser,
  CreateUser,
  GetUserFriends,
  UpdateUser,
  DeleteUser,
};
