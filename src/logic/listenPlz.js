function listenPlz(ticBoard){
	ticBoard[0].addEventListener("click", function() {AddSign(0, ticBoard);});
	ticBoard[1].addEventListener("click", function() {AddSign(1, ticBoard);});
	ticBoard[2].addEventListener("click", function() {AddSign(2, ticBoard);});
	ticBoard[3].addEventListener("click", function() {AddSign(3, ticBoard);});
	ticBoard[4].addEventListener("click", function() {AddSign(4, ticBoard);});
	ticBoard[5].addEventListener("click", function() {AddSign(5, ticBoard);});
	ticBoard[6].addEventListener("click", function() {AddSign(6, ticBoard);});
	ticBoard[7].addEventListener("click", function() {AddSign(7, ticBoard);});
	ticBoard[8].addEventListener("click", function() {AddSign(8, ticBoard);});
}

function AddSign(i, ticBoard){
	if(true){
		ticBoard[i].innerHTML = "X";
	}
	else {
 		ticBoard[i].innerHTML = "O";
	}
	
}

module.exports = listenPlz;