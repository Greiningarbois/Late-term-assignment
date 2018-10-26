
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

  test("Testing if checkrow returns false where it should", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x",0);
    TicTacToe.editField("x",1);
    TicTacToe.editField("x",2);
    expect(TicTacToe.checkRow(0,1,2,"o")).toBeFalsy();
  });

  test("Testing if won returns true when it should", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x", 0);
    TicTacToe.editField("x", 1);
    TicTacToe.editField("x", 2);
    expect(TicTacToe.won("x")).toBeTruthy();
  });

  test("Testing if won returns false with an empty board", () => {
    TicTacToe.makeEmptyBoard();
    expect(TicTacToe.won("x")).toBeFalsy();
  });

  test("Testing if randomNumber returns a random number between 0-8", () => {
    expect(TicTacToe.randomNumber()).toBeLessThan(9);
    expect(TicTacToe.randomNumber()).toBeGreaterThanOrEqual(0);
  });

  test("Testing if computerMove returns 'o'", () => {
    expect(TicTacToe.computerMove()).toBe("o");
  });

  test("Testing if computerMove actually edits a field", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x", 0);
  });

  test("Testing if won returns true when it should", () => {
    TicTacToe.makeEmptyBoard();
    TicTacToe.editField("x", 0);
    TicTacToe.editField("x", 1);
    TicTacToe.editField("x", 2);
    TicTacToe.editField("x", 3);
    TicTacToe.editField("x", 5);
    TicTacToe.editField("x", 6);
    TicTacToe.editField("x", 7);
    TicTacToe.editField("x", 8);
    TicTacToe.computerMove();
    expect(TicTacToe.getField(4)).toBe("o");
  });
