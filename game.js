// Nested tic-tac-toe. The page and the tests both use this file.
// Read AGENTS.md before changing win, draw, or turn behavior.
(function (root, factory) {
  "use strict";

  var api = factory();
  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else {
    root.Game = api;
  }
})(typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var EMPTY = " ";
  var ALREADY_SET = "This position is already SET";
  var INNER_DRAW = "draw!";
  var OUTER_DRAW = "Game is a draw. Unfortunate. :/";

  function createBoard() {
    return [
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
      [EMPTY, EMPTY, EMPTY],
    ];
  }

  function createGame() {
    var boards = [];
    var i;
    for (i = 0; i < 9; i += 1) {
      boards.push(createBoard());
    }
    return {
      boards: boards,
      outer: createBoard(),
      turn: 0,
      active: null,
    };
  }

  function rowCol(index) {
    return [Math.floor(index / 3), index % 3];
  }

  function currentPlayer(game) {
    return game.turn % 2 === 0 ? "X" : "O";
  }

  function winner(board) {
    var lines = [];
    var i;
    for (i = 0; i < 3; i += 1) {
      lines.push([board[i][0], board[i][1], board[i][2]]);
      lines.push([board[0][i], board[1][i], board[2][i]]);
    }
    lines.push([board[0][0], board[1][1], board[2][2]]);
    lines.push([board[0][2], board[1][1], board[2][0]]);

    for (i = 0; i < lines.length; i += 1) {
      var line = lines[i];
      if (line[0] !== EMPTY && line[0] === line[1] && line[1] === line[2]) {
        return line[0];
      }
    }
    return null;
  }

  function isFull(board) {
    var row;
    var col;
    for (row = 0; row < 3; row += 1) {
      for (col = 0; col < 3; col += 1) {
        if (board[row][col] === EMPTY) {
          return false;
        }
      }
    }
    return true;
  }

  // A completed line wins even when the board is full. A full board with no
  // line is a draw.
  function outcome(board) {
    if (winner(board)) {
      return "win";
    }
    if (isFull(board)) {
      return "draw";
    }
    return null;
  }

  function preview(game, index) {
    var board = game.boards[index];
    var rows = [];
    var row;
    for (row = 0; row < 3; row += 1) {
      rows.push(
        [0, 1, 2]
          .map(function (col) {
            return board[row][col] === EMPTY ? "·" : board[row][col];
          })
          .join(" | "),
      );
    }
    return rows.join("\n");
  }

  function backToMain(game) {
    game.active = null;
  }

  function play(game, index) {
    if (!Number.isInteger(index) || index < 0 || index > 8) {
      throw new RangeError("cell index must be an integer from 0 to 8");
    }

    var alerts = [];
    var rc = rowCol(index);

    if (game.active === null) {
      if (game.outer[rc[0]][rc[1]] !== EMPTY) {
        alerts.push(ALREADY_SET);
        return alerts;
      }
      game.active = index;
      return alerts;
    }

    var board = game.boards[game.active];
    if (board[rc[0]][rc[1]] !== EMPTY) {
      alerts.push(ALREADY_SET);
      return alerts;
    }

    var mark = currentPlayer(game);
    var outerBefore = outcome(game.outer);
    board[rc[0]][rc[1]] = mark;

    var inner = outcome(board);
    if (inner === "win" || inner === "draw") {
      var outerRc = rowCol(game.active);
      game.outer[outerRc[0]][outerRc[1]] = mark;
      alerts.push(inner === "win" ? mark + " wins in here" : INNER_DRAW);
    }

    var outerAfter = outcome(game.outer);
    if (outerBefore !== "win" && outerAfter === "win") {
      alerts.push(winner(game.outer) + " WINS!!!");
    } else if (outerBefore !== "draw" && outerAfter === "draw") {
      alerts.push(OUTER_DRAW);
    }

    game.active = null;
    game.turn += 1;
    return alerts;
  }

  function visibleMark(game, index) {
    var rc = rowCol(index);
    var board = game.active === null ? game.outer : game.boards[game.active];
    return board[rc[0]][rc[1]];
  }

  return {
    EMPTY: EMPTY,
    createGame: createGame,
    currentPlayer: currentPlayer,
    play: play,
    backToMain: backToMain,
    preview: preview,
    visibleMark: visibleMark,
    outcome: outcome,
    winner: winner,
  };
});
