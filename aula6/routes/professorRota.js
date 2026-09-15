const express = require("express");

const professorControle = require("../controller/professorControle");

const router = express.Router();

router.get("/", professorControle.listarprofessores);

module.exports = router;