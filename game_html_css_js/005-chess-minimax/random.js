
// Hai nguoi danh random()
var board = null
var game = new Chess()

function makeRandomMove () {
  var possibleMoves = game.moves()

  // exit if the game is over
  if (game.game_over()) return

  var randomIdx = Math.floor(Math.random() * possibleMoves.length)
  game.move(possibleMoves[randomIdx])
  board.position(game.fen())

  window.setTimeout(makeRandomMove, 500)
}

board = Chessboard('myBoard', 'start')

window.setTimeout(makeRandomMove, 500)


// Mot nguoi danh random()
// const { Chess } = require('./chess.js')
// const chess = new Chess()

// while (!chess.game_over()) {
//     const moves = chess.moves()
//     const move = moves[Math.floor(Math.random() * moves.length)]
//     chess.move(move)
// }
// console.log(chess.pgn())

/* https://github.com/jhlywa/chess.js
   https://chessboardjs.com/docs */