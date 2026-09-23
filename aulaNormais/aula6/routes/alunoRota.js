const express = require("express");

const alunoController = require("../controller/alunoController");

const router = express.Router();

router.get("/", alunoController.listarAlunos);

module.exports = router;