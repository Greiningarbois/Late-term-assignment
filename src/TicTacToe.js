var board = [];
var TicTacToe = {


	makeEmptyBoard : function() {
	  for (var i = 0; i <= 8; i++) {
	    board[i] = "";
	  }
		return board;
	},

}
module.exports = TicTacToe;