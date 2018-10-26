
const TicTacToe = require('./TicTacToe');

test("Testing make empty board", () => {
  const expected = ["", "", "", "", "", "", "", "", ""];
  expect(TicTacToe.makeEmptyBoard()).toEqual(expect.arrayContaining(expected));
});

test("Testing getField with an empty board", () => {
    TicTacToe.makeEmptyBoard();
    expect(TicTacToe.getField(5)).toBe("");
  });

test("Testing if editField works on an empty board", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x", 5);
    expect(TicTacToe.getField(5)).toBe("x");
});

test("Testing if checkrow returns true where it should", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x",0);
    TicTacToe.editField("x",1);
    TicTacToe.editField("x",2);
    expect(TicTacToe.checkRow(0,1,2,"x")).toBeTruthy();
  });

