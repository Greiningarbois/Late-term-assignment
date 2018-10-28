const _ = require("lodash");
const listenPlz = require('../logic/listenPlz');


$(document).ready(function() {
	var ticBoard = document.getElementsByClassName('tacTic');
	var playerTurn = document.getElementById('playerTurn');
	listenPlz(ticBoard, playerTurn);
});