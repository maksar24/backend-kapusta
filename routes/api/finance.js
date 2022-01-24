const express = require("express");

const { validation, ctrlWrapper, auth } = require("../../middlewares");

const { joiSchemaTransaction, joiSchemaUser } = require("../../models/finance");

const { users: userCtrl, finance: financeCtrl } = require("../../controllers");

const router = express.Router();

//TODO Вывод всех
router.get("/", ctrlWrapper(userCtrl.listUsers));

//TODO Вывод одного
router.get("/:id", ctrlWrapper(userCtrl.getUserById));

//TODO Добавление транзакции
router.post("/", auth, validation(joiSchemaTransaction), ctrlWrapper(financeCtrl.addUserTransaction));

//TODO Удаление транзакции
router.delete("/:id", auth, ctrlWrapper(financeCtrl.deleteUserTransaction));

//TODO Обновление баланса по id
// router.put("/:id/finance/balance", validation(joiSchemaTransaction), ctrlWrapper(financeCtrl.addUserBalance));

module.exports = router;
