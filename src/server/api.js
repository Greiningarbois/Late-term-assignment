const express = require("express");
const router = express.Router();
const TicTacToe = require("../logic/TicTacToe");



router.get("/TicTacToe/:name", (req, res) => {
	res.status(200).send({ TicTacToe: TicTacToe(req.params.name) });
});

router.options("/", (req, res) => {
  const options = {
    options: { get: ["/api/greeting", "/api/greeting/{NAME}"] }
  };
  res.status(200).send(options);
});

module.exports = router;