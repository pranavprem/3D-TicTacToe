# 3D Tic-Tac-Toe

A nested tic-tac-toe game in the browser. The master board is a 3×3 of smaller 3×3 boards. Win a small board to put your mark on the master board. Three in a row there wins the game.

Pranav Prem wrote it as a proof of concept that would be easy to learn and would last a lecture at Goa College of Engineering. The name says three-dimensional. What you play is two levels of ordinary tic-tac-toe, not a 3×3×3 cube.

## How to play

1. The screen starts on the master board. **X** moves first.
2. Click a square to open the small board inside it. Hover or focus a square to peek at that board without opening it.
3. Click an empty cell to place your mark. The view returns to the master board, and the turn passes.
4. **MAIN** goes back to the master board without placing a mark and without spending the turn.
5. Win a small board (three in a row) and that master square becomes yours.
6. Three of your marks in a row on the master board wins.

A small board that fills up with no three-in-a-row is still claimed, by whoever placed the last mark. The game tells you with `draw!`. A full master board with no line ends as `Game is a draw. Unfortunate. :/`.

You choose which open board to enter. A move does not force your opponent into a particular board.

## Run it

Open [`main.html`](main.html) in a browser. That is the whole app.

To serve it locally, use Node.js 20 or newer:

```bash
npm install
npm start
```

Then open <http://localhost:3000>. Set `PORT` to use another port.

## Checks

```bash
npm test             # game rules
npm run lint         # eslint
npm run format:check # prettier
npm run check        # all three
```

GitHub Actions runs the same checks on Node 22. There is no build step.

## Tech stack

- HTML, CSS, and JavaScript. No framework and no bundler.
- [`game.js`](game.js) holds the rules and is shared by the page and the tests.
- Node.js built-ins only at runtime: `node:test` for tests, `node:http` for `npm start`.
- ESLint and Prettier are dev dependencies.

## Project structure

```
main.html              page
main.js                DOM: render the board, forward clicks
mystyle.css            layout and X/O colors
game.js                rules (browser global and CommonJS)
scripts/serve.js       static file server
test/game.test.js      rule tests
.github/workflows/ci.yml
AGENTS.md              guide for coding agents
CLAUDE.md              pointer to AGENTS.md
try.html, try.js       original scratch files, not part of the game
```

## License

This repository has no license file. The last commit before this refresh was in 2017. Nothing in that history, and nothing in this refresh, grants permission to reuse the code. Adding a license is the owner's decision.
