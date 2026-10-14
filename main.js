(function () {
  "use strict";

  var game = Game.createGame();
  var buttons = Array.prototype.slice.call(
    document.querySelectorAll("#board button"),
  );
  var whereEl = document.getElementById("where");
  var turnEl = document.getElementById("turn");
  var previewFigure = document.getElementById("preview-wrap");
  var previewEl = document.getElementById("preview");
  var pointed = null;

  function render() {
    var onMain = game.active === null;
    var player = Game.currentPlayer(game);

    whereEl.textContent = onMain ? "MAIN TICTACTOE" : "INNER TICTACTOE";
    turnEl.textContent = onMain
      ? player + " to move"
      : player + " to move · inner board " + (game.active + 1);

    buttons.forEach(function (button, index) {
      var mark = Game.visibleMark(game, index);
      var row = Math.floor(index / 3) + 1;
      var col = (index % 3) + 1;
      button.textContent = mark === Game.EMPTY ? "" : mark;
      button.classList.toggle("mark-x", mark === "X");
      button.classList.toggle("mark-o", mark === "O");
      button.setAttribute(
        "aria-label",
        (mark === Game.EMPTY ? "Empty" : mark) +
          ", row " +
          row +
          ", column " +
          col,
      );
      if (onMain) {
        button.title = Game.preview(game, index);
      } else {
        button.removeAttribute("title");
      }
    });

    previewFigure.hidden = !onMain;
    if (onMain) {
      previewEl.textContent =
        pointed === null ? "Hover a cell" : Game.preview(game, pointed);
    }
  }

  function pointAt(index) {
    pointed = index;
    if (game.active !== null) {
      return;
    }
    previewEl.textContent = Game.preview(game, index);
  }

  buttons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      var alerts = Game.play(game, index);
      alerts.forEach(function (message) {
        window.alert(message);
      });
      render();
    });
    button.addEventListener("mouseenter", function () {
      pointAt(index);
    });
    button.addEventListener("mouseleave", function () {
      if (pointed === index) {
        pointed = null;
        if (game.active === null) {
          previewEl.textContent = "Hover a cell";
        }
      }
    });
    button.addEventListener("focus", function () {
      pointAt(index);
    });
  });

  document.getElementById("back").addEventListener("click", function () {
    Game.backToMain(game);
    render();
  });

  render();
})();
