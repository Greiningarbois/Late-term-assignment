function listenPlz(ticBoard, playerTurn){
	ticBoard[0].addEventListener("click", function() {AddSign(0, ticBoard, playerTurn);});
	ticBoard[1].addEventListener("click", function() {AddSign(1, ticBoard, playerTurn);});
	ticBoard[2].addEventListener("click", function() {AddSign(2, ticBoard, playerTurn);});
	ticBoard[3].addEventListener("click", function() {AddSign(3, ticBoard, playerTurn);});
	ticBoard[4].addEventListener("click", function() {AddSign(4, ticBoard, playerTurn);});
	ticBoard[5].addEventListener("click", function() {AddSign(5, ticBoard, playerTurn);});
	ticBoard[6].addEventListener("click", function() {AddSign(6, ticBoard, playerTurn);});
	ticBoard[7].addEventListener("click", function() {AddSign(7, ticBoard, playerTurn);});
	ticBoard[8].addEventListener("click", function() {AddSign(8, ticBoard, playerTurn);});
}

function AddSign(i, ticBoard, playerTurn){
	if(playerTurn.innerHTML == "Player X turn"){
		ticBoard[i].innerHTML = "X";
		playerTurn.innerHTML = "Player O turn";
	}
	else {
 		ticBoard[i].innerHTML = "O";
		playerTurn.innerHTML = "Player X turn";
	}
}

module.exports = listenPlz;