const express = require("express");
const router = express.Router();
const TicTacToe = require("./TicTacToe");

router.get("/TicTacToe/:name", (req, res) => {
	res.status(200).send({ TicTacToe: TicTacToe(req.params.name) });
});

module.exports = router;