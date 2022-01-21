//? библиотека для генерации ошибок
const createError = require("http-errors");

const { User } = require("../../models");

const getUserById = async (req, res) => {
  //? найти по id
  const { id } = req.params;
  const result = await User.findById(id);

  //? проверка на существование id
  if (!result) {
    // const error = new Error(`Contact with id=${id} not found`);
    // error.status = 404;
    // throw error;

    throw createError(404, `User with id=${id} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = getUserById;
