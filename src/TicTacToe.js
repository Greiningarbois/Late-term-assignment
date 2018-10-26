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

}
module.exports = TicTacToe;
