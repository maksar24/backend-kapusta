const express = require("express");

const { validation, ctrlWrapper } = require("../../middlewares");

const { joiSchemaTransaction, joiSchemaUser } = require("../../models/finance");

const { users: userCtrl, finance: financeCtrl } = require("../../controllers");

const router = express.Router();

//TODO Вывод всех
router.get("/", ctrlWrapper(userCtrl.listUsers));

//TODO Вывод одного
router.get("/:id", ctrlWrapper(userCtrl.getUserById));

//TODO Добавление пользователя
router.post("/", validation(joiSchemaUser), ctrlWrapper(financeCtrl.addUser));

//TODO Добавление транзакции
router.post("/:id/transaction", validation(joiSchemaTransaction), ctrlWrapper(financeCtrl.addUserTransaction));

//TODO Обновление баланса по id
router.put("/:id/finance/balance", validation(joiSchemaTransaction), ctrlWrapper(financeCtrl.addUserBalance));

//TODO Удаление
router.delete("/:id", ctrlWrapper(userCtrl.removeUser));

module.exports = router;
