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
	if(playerTurn.innerHTML == "Player X turn" && ticBoard[i].innerHTML == ''){
		ticBoard[i].innerHTML = "X";
		if(checkWinner(ticBoard)){
			playerTurn.innerHTML = "We have a winner. It is " + ticBoard[i].innerHTML;
		}
		else{
			playerTurn.innerHTML = "Player O turn";
		}
	}
	else {
		if(ticBoard[i].innerHTML == ''){
			ticBoard[i].innerHTML = "O";
			if(checkWinner(ticBoard)){
				playerTurn.innerHTML = "We have a winner. It is " + ticBoard[i].innerHTML;
			}
		else{
			playerTurn.innerHTML = "Player X turn";
			}
		}
	}
}

function checkRow(a, b, c, ticBoard){
	return (ticBoard[a].innerHTML == ticBoard[b].innerHTML && ticBoard[b].innerHTML == ticBoard[c].innerHTML && ticBoard[a].innerHTML != '');

}

function checkWinner(ticBoard){
	return (checkRow(3,4,5, ticBoard) || checkRow(6,7,8, ticBoard) ||
		checkRow(0,4,8, ticBoard) || checkRow(2,4,6, ticBoard) ||
		checkRow(0,3,6, ticBoard) || checkRow(1,4,7, ticBoard) ||
		checkRow(2,5,8, ticBoard));
} 

module.exports = listenPlz;