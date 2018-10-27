
var board = [];
var number;
var TicTacToe = {

	makeEmptyBoard : function() {
	  for (var i = 0; i <= 8; i++) {
	    board[i] = "";
	  }
		return board;
	},

	getField : function(number) {
	  return board[number];
	},

  editField : function(symbol, number) {
	  board[number] = symbol;
	},

	checkRow : function(a,b,c, move) {
	  var result = false;
	  if (board[a] == move && board[b] == move && board[c] == move) {
	    result = true;
	  }
	  return result;
	},

	won : function(move) {
	  var result = false;
	  if (TicTacToe.checkRow(0,1,2, move) ||
				TicTacToe.checkRow(3,4,5, move) ||
	      TicTacToe.checkRow(6,7,8, move) ||
	      TicTacToe.checkRow(0,4,8, move) ||
	      TicTacToe.checkRow(2,4,6, move) ||
	      TicTacToe.checkRow(0,3,6, move) ||
	      TicTacToe.checkRow(1,4,7, move) ||
	      TicTacToe.checkRow(2,5,8, move)) {
	    result = true;
	  }
	  if(result) {
	    winner = move;
	  }
	  return result;
	},

	randomNumber : function() {
		return Math.floor(Math.random() * 9);
	},

	computerMove : function() { //if computer is always "o"
	var cmpMove = TicTacToe.randomNumber();
	while (board[cmpMove] == "x" || board[cmpMove] == "o") {
		if (cmpMove == 8) {
			cmpMove = 0;
		} else {
			cmpMove++;
		}
	}
	TicTacToe.editField("o", cmpMove);
	return "o";
},



}
module.exports = TicTacToe;

