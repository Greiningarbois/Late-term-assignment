/*const greeting = require('./TicTacToe');
test("returns greeting with custom name", () => {
    expect(greeting("Mei")).toBe("Hello, Mei!");
});*/

const TicTacToe = require('./TicTacToe');

test("Testing make empty board", () => {
  const expected = ["", "", "", "", "", "", "", "", ""];
  expect(TicTacToe.makeEmptyBoard()).toEqual(expect.arrayContaining(expected));
});