
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

}
module.exports = TicTacToe;

