const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");
const { joiSchema } = require("../../models/user");
const { joiSchemaIncome } = require("../../models/finance");

const { users: userCtrl, finance: financeCtrl } = require("../../controllers");

const router = express.Router();

// localhost:3000/api/finance/61eaba8c3491ce9e58fc87bf/consumption/3
//TODO Вывод всех
router.get("/", ctrlWrapper(userCtrl.listUsers));

//TODO Вывод одного
router.get("/:id", ctrlWrapper(userCtrl.getUserById));

//TODO Добавление пользователя
router.post("/", validation(joiSchema), ctrlWrapper(userCtrl.addUserFinance));

//TODO Добавление финанса
router.post("/:id/finance", validation(joiSchemaIncome), ctrlWrapper(financeCtrl.addUserFinance));

//TODO Обновление баланса по id
router.put("/:id/finance/balance", validation(joiSchema), ctrlWrapper(financeCtrl.addUserBalance));

//TODO Удаление
router.delete("/:id", ctrlWrapper(userCtrl.removeUser));

module.exports = router;
