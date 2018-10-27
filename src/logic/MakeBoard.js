function MakeBoard(){
	var t = "<table Style=\"width:200px;height:200px;\"><tr><td id=\"Tic1\" class=\"tacTic\"></td><td style=\"border-left:solid;border-right:solid\" id=\"Tic2\" class=\"tacTic\"></td><td id=\"Tic3\" class=\"tacTic\"></td></tr><tr><td style=\"border-top:solid;border-bottom:solid\" id=\"Tic4\" class=\"tacTic\"></td><td style=\"border:solid;\" id=\"Tic5\" class=\"tacTic\"></td>\n<td style=\"border-top:solid;border-bottom:solid\" id=\"Tic6\" class=\"tacTic\"></td>\n</tr>\n<tr>\n<td id=\"Tic7\" class=\"tacTic\"></td>\n<td style=\"border-left:solid;border-right:solid\" id=\"Tic8\" class=\"tacTic\"></td>\n<td id=\"Tic9\" class=\"tacTic\"></td>\n</tr></table>"

	return t;
}

module.exports = MakeBoard;
