const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/user");

const { users: ctrl } = require("../../controllers");

const router = express.Router();

//TODO Вывод всех
router.get("/", ctrlWrapper(ctrl.listUsers));

//TODO Вывод одного
router.get("/:id", ctrlWrapper(ctrl.getUserById));

//TODO Добавление
router.post("/", validation(joiSchema), ctrlWrapper(ctrl.addUserFinance));

//TODO Обновление
router.put("/:id", validation(joiSchema), ctrlWrapper(ctrl.updateById));

//TODO Обновление PATCH
router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatusContact));

//TODO Удаление
router.delete("/:id", ctrlWrapper(ctrl.removeContact));

module.exports = router;
