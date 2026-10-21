# Agent guide

Nested tic-tac-toe, played in the browser. This file is the source of truth for coding agents. `CLAUDE.md` and `.cursor/rules/project.mdc` point here so the three stay in agreement.

## What this is

A master 3×3 board. Each cell is its own 3×3 board. Win a small board to claim that cell. Three in a row on the master board wins.

The repository title says "3D". The board is two levels of ordinary tic-tac-toe, not a 3×3×3 cube. It is also not standard Ultimate Tic-Tac-Toe: a move does not send the opponent to a particular board. The player chooses which open board to enter.

`try.html` and `try.js` are scratch files from the original project. Nothing loads them.

## Commands

Needs Node.js 20 or newer. Opening `main.html` directly also works, because the scripts are classic (not ES modules).

```bash
npm install          # first time only; installs eslint and prettier
npm start            # http://localhost:3000  (PORT overrides the port)
npm test             # node:test, game rules
npm run lint
npm run format       # prettier --write
npm run format:check
npm run check        # format, lint, and test
```

There is no build step and no runtime dependency. CI (`.github/workflows/ci.yml`) runs format, lint, and test on Node 22.

## Layout

| Path                 | Role                                                                       |
| -------------------- | -------------------------------------------------------------------------- |
| `main.html`          | Page. Nine buttons inside `#board`, in reading order.                      |
| `mystyle.css`        | Layout and the X/O colors.                                                 |
| `main.js`            | DOM only. Renders `Game` and forwards clicks.                              |
| `game.js`            | Rules. Attaches `window.Game` in the browser and `module.exports` in Node. |
| `scripts/serve.js`   | Dependency-free static server.                                             |
| `test/game.test.js`  | Rule tests, plus a check that the page still wires the buttons.            |
| `try.html`, `try.js` | Unused scratch. Do not load or "finish" them.                              |

Cell index `0..8` is row-major. Button DOM order inside `#board` is that index. `tt00` is the top-left cell. The status line numbers inner boards `1..9` for humans; the code stays 0-based.

## Rules that look like bugs

Preserve these. Tests lock them in.

- One successful mark, then the view returns to the master board. Enter again to keep playing that board.
- `MAIN` (`Game.backToMain`) goes back without spending the turn and without clearing the match. There is no new-game control.
- An occupied cell or an already claimed master cell alerts `This position is already SET` and does not change the turn.
- Winning an inner board alerts `X wins in here` or `O wins in here` and claims the master cell for that player.
- A full inner board with no three-in-a-row alerts `draw!` and still claims the master cell for the player who filled it.
- The first three-in-a-row on the master board alerts `X WINS!!!` or `O WINS!!!`, using the player who actually owns the line. Later moves do not alert it again.
- A full master board with no line alerts `Game is a draw. Unfortunate. :/`.
- A line completed on the ninth cell is a win, not a draw. Win is checked before fullness.
- Play does not lock after a win or a draw alert. Claimed cells stay closed; empty ones can still be played.
- Hovering or focusing a master cell shows that inner board (`Game.preview`). The panel is hidden while inside a board.

Alert strings are part of the contract. Match them exactly.

## Conventions

- Put rule changes in `game.js` and cover them in `test/game.test.js`. Keep `main.js` free of rule logic.
- `game.js` must keep working as a classic script and as a CommonJS module. Do not add `import` / `export` unless you also change how the page loads it.
- Prettier is the formatter (2-space indent, LF, via `.editorconfig`). ESLint is the flat config in `eslint.config.js`.
- Do not add a license file. The repository does not grant one; that decision belongs to the owner.

## Gotchas

- `game.js` mutates the object from `createGame()`. Tests should start from a fresh game.
- `play` returns every alert for that click, inner result first. The page passes each one to `window.alert`.
- The hover text used to be a `title` tooltip with uneven spacing. `preview` is the aligned grid (`X | · | ·`). The `title` attribute still carries that same string.
- The dev server maps `/` to `main.html` and refuses paths that escape the repo root. It does not list directories.
- `package.json` is `"private": true`. This package is not published.
