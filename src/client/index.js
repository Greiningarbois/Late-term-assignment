

const _ = require("lodash");
const MakeBoard = require('../logic/MakeBoard');
const listenPlz = require('../logic/listenPlz');

function component() {  
	let ele = document.createElement('div');
	var board = MakeBoard();
	//var playerTurn = playerTurn();
	ele.innerHTML = board;
	var ticBoard = ele.getElementsByClassName('tacTic');
	listenPlz(ticBoard);
	return ele;
}

document.body.appendChild(component());