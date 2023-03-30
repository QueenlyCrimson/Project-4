const { UserFriend } = require("../models");

const AddFriend = async (req, res) => {
  try {
    let { userId, friendId } = req.params;
    let friendBody = {
      userId: +userId,
      friendId: +friendId,
    };
    let newUF = await UserFriend.create(friendBody);
    res.send(newUF);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  AddFriend,
};
