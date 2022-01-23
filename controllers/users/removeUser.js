const createError = require("http-errors");

const { User } = require("../../models");

const removeUser = async (req, res) => {
  const { id } = req.params;
  const result = await User.findByIdAndRemove(id);
  if (!result) {
    throw createError(404, `User with id=${id} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "User deleted",
    data: {
      result,
    },
  });
};

module.exports = removeUser;
