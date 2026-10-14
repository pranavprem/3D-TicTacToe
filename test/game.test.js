"use strict";

var test = require("node:test");
var assert = require("node:assert/strict");
var fs = require("node:fs");
var path = require("node:path");
var Game = require("../game.js");

function winInner(game, board) {
  var alerts = [];
  var i;
  for (i = 0; i < 3; i += 1) {
    alerts.push.apply(alerts, Game.play(game, board));
    alerts.push.apply(alerts, Game.play(game, i));
    if (i < 2) {
      alerts.push.apply(alerts, Game.play(game, board));
      alerts.push.apply(alerts, Game.play(game, 3 + i));
    }
  }
  return alerts;
}

function place(game, board, cell) {
  assert.deepEqual(Game.play(game, board), []);
  return Game.play(game, cell);
}

test("a new game is the empty master board and X moves first", function () {
  var game = Game.createGame();
  var i;
  assert.equal(game.active, null);
  assert.equal(Game.currentPlayer(game), "X");
  for (i = 0; i < 9; i += 1) {
    assert.equal(Game.visibleMark(game, i), Game.EMPTY);
  }
});

test("entering a board does not spend the turn", function () {
  var game = Game.createGame();
  assert.deepEqual(Game.play(game, 4), []);
  assert.equal(game.active, 4);
  assert.equal(game.turn, 0);
  assert.equal(Game.currentPlayer(game), "X");
});

test("a mark returns to the master board and hands over the turn", function () {
  var game = Game.createGame();
  Game.play(game, 4);
  assert.deepEqual(Game.play(game, 0), []);
  assert.equal(game.active, null);
  assert.equal(Game.currentPlayer(game), "O");
  assert.equal(game.boards[4][0][0], "X");
  assert.equal(Game.visibleMark(game, 4), Game.EMPTY);
});

test("MAIN leaves the match untouched", function () {
  var game = Game.createGame();
  Game.play(game, 4);
  Game.backToMain(game);
  assert.equal(game.active, null);
  assert.equal(game.turn, 0);
  assert.equal(game.boards[4][0][0], Game.EMPTY);
});

test("an occupied inner cell does not change the turn", function () {
  var game = Game.createGame();
  Game.play(game, 0);
  Game.play(game, 0);
  Game.play(game, 0);
  var turn = game.turn;
  assert.deepEqual(Game.play(game, 0), ["This position is already SET"]);
  assert.equal(game.turn, turn);
  assert.equal(game.active, 0);
  assert.equal(Game.currentPlayer(game), "O");
});

test("a claimed master cell stays closed", function () {
  var game = Game.createGame();
  var alerts = winInner(game, 0);
  assert.ok(alerts.includes("X wins in here"));
  assert.equal(Game.visibleMark(game, 0), "X");
  assert.equal(game.active, null);
  assert.deepEqual(Game.play(game, 0), ["This position is already SET"]);
  assert.equal(game.active, null);
  assert.equal(Game.currentPlayer(game), "O");
});

test("three in a row on a full inner board is a win, not a draw", function () {
  var game = Game.createGame();
  var moves = [0, 1, 2, 3, 4, 5, 7, 6, 8];
  var last = [];
  var i;
  for (i = 0; i < moves.length; i += 1) {
    last = place(game, 0, moves[i]);
    if (i < moves.length - 1) {
      assert.deepEqual(last, []);
    }
  }
  assert.deepEqual(last, ["X wins in here"]);
  assert.equal(Game.visibleMark(game, 0), "X");
  assert.equal(Game.outcome(game.boards[0]), "win");
});

test("a filled inner board with no line is claimed by whoever filled it", function () {
  var game = Game.createGame();
  var moves = [0, 1, 2, 5, 3, 6, 4, 8, 7];
  var last = [];
  var i;
  for (i = 0; i < moves.length; i += 1) {
    last = place(game, 0, moves[i]);
    if (i < moves.length - 1) {
      assert.deepEqual(last, []);
    }
  }
  assert.deepEqual(last, ["draw!"]);
  assert.equal(Game.visibleMark(game, 0), "X");
  assert.equal(Game.winner(game.boards[0]), null);
});

test("the master board announces the first three in a row once", function () {
  var game = Game.createGame();
  winInner(game, 0);
  winInner(game, 3);
  winInner(game, 1);
  winInner(game, 4);
  var winning = winInner(game, 2);
  assert.ok(winning.includes("X wins in here"));
  assert.ok(winning.includes("X WINS!!!"));
  assert.equal(Game.visibleMark(game, 0), "X");
  assert.equal(Game.visibleMark(game, 1), "X");
  assert.equal(Game.visibleMark(game, 2), "X");

  var later = winInner(game, 5);
  assert.ok(later.includes("O wins in here"));
  assert.equal(later.includes("O WINS!!!"), false);
  assert.equal(later.includes("X WINS!!!"), false);
});

test("a full master board with no line is the long draw message", function () {
  var game = Game.createGame();
  var order = [0, 1, 2, 4, 3, 6, 5, 8, 7];
  var i;
  var alerts;
  for (i = 0; i < order.length; i += 1) {
    alerts = winInner(game, order[i]);
    if (i < order.length - 1) {
      assert.equal(
        alerts.some(function (message) {
          return message.indexOf("WINS!!!") !== -1;
        }),
        false,
      );
      assert.equal(alerts.includes("Game is a draw. Unfortunate. :/"), false);
    }
  }
  assert.ok(alerts.includes("X wins in here"));
  assert.ok(alerts.includes("Game is a draw. Unfortunate. :/"));
  assert.equal(
    alerts.some(function (message) {
      return message.indexOf("WINS!!!") !== -1;
    }),
    false,
  );
  assert.equal(Game.outcome(game.outer), "draw");
});

test("preview shows the inner board in reading order", function () {
  var game = Game.createGame();
  game.boards[0][0][0] = "X";
  game.boards[0][1][1] = "O";
  assert.equal(Game.preview(game, 0), "X | · | ·\n· | O | ·\n· | · | ·");
});

test("play rejects indexes outside the board", function () {
  var game = Game.createGame();
  assert.throws(function () {
    Game.play(game, 9);
  }, RangeError);
  assert.throws(function () {
    Game.play(game, 1.5);
  }, RangeError);
});

test("the page wires the nine cells, both scripts, and MAIN", function () {
  var html = fs.readFileSync(path.join(__dirname, "..", "main.html"), "utf8");
  var ids = [
    "tt00",
    "tt01",
    "tt02",
    "tt10",
    "tt11",
    "tt12",
    "tt20",
    "tt21",
    "tt22",
  ];
  ids.forEach(function (id) {
    assert.match(html, new RegExp('id="' + id + '"'));
  });
  assert.match(html, /src="game\.js"/);
  assert.match(html, /src="main\.js"/);
  assert.match(html, /id="back"/);
  assert.match(html, /id="where"/);
  assert.match(html, /id="preview"/);
});
