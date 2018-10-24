const greeting = require('./TicTacToe');
test("returns greeting with custom name", () => {
    expect(greeting("Mei")).toBe("Hello, Mei!");
});
